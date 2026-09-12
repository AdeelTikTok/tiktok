import fs from "node:fs";

// Minimal, dependency-free JPEG/PNG dimension reader — avoids pulling in
// general-purpose image libraries (several have had DoS advisories for
// exotic formats we never touch) since we only ever read our own trusted
// local JPEG/PNG assets.
export function readImageDimensions(absPath: string): { width: number; height: number } | null {
  const buf = fs.readFileSync(absPath);

  // PNG: 8-byte signature, then IHDR chunk with width/height as big-endian u32 at offset 16/20.
  if (buf.length > 24 && buf.readUInt32BE(0) === 0x89504e47) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }

  // JPEG: walk marker segments looking for a SOF marker (0xC0-0xCF, excluding
  // DHT 0xC4, JPG 0xC8, DAC 0xCC), which encodes height/width as big-endian u16.
  if (buf.length > 4 && buf[0] === 0xff && buf[1] === 0xd8) {
    let offset = 2;
    while (offset + 9 < buf.length) {
      if (buf[offset] !== 0xff) {
        offset++;
        continue;
      }
      const marker = buf[offset + 1];
      const segmentLength = buf.readUInt16BE(offset + 2);
      const isSOF =
        marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
      if (isSOF) {
        return { height: buf.readUInt16BE(offset + 5), width: buf.readUInt16BE(offset + 7) };
      }
      offset += 2 + segmentLength;
    }
  }

  return null;
}
