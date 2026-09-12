import { cookies } from "next/headers";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "3306"),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "tiktok_shop_solutions",
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});

export async function verifyLogin(email: string, password: string): Promise<boolean> {
  try {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.execute<any[]>(
        "SELECT password FROM users WHERE email = ?",
        [email]
      );

      if (rows.length === 0) return false;

      const hashedPassword = rows[0].password;
      return await bcrypt.compare(password, hashedPassword);
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Auth error:", error);
    return false;
  }
}

export async function createSession(email: string): Promise<string> {
  const token = crypto.randomBytes(32).toString("hex");
  const cookieStore = await cookies();

  cookieStore.set("admin_session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24, // 24 hours
  });

  // Store session in database
  try {
    const connection = await pool.getConnection();
    try {
      await connection.execute(
        "UPDATE users SET last_login = NOW() WHERE email = ?",
        [email]
      );
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Session storage error:", error);
  }

  return token;
}

export async function getSession(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get("admin_session")?.value || null;
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
}

export async function isAuthenticated(): Promise<boolean> {
  const session = await getSession();
  return !!session;
}
