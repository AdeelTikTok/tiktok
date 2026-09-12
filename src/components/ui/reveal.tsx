"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "span";
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  as = "div",
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const MotionTag = as === "span" ? motion.span : motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.3 }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

type RevealTextProps = {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
};

// The animated child is translated fully outside its overflow-hidden wrapper while
// hidden, so it has zero intersection area of its own — whileInView must live on the
// (always fully visible) wrapper and propagate down to the child via variants.
const lineVariants: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%" },
};

export function RevealLines({ text, className, delay = 0, once = true }: RevealTextProps) {
  const lines = text.split("\n");
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <motion.span
          key={i}
          className="block overflow-hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once, amount: 0.4 }}
        >
          <motion.span
            className="block"
            variants={lineVariants}
            transition={{
              duration: 1,
              delay: delay + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </motion.span>
      ))}
    </span>
  );
}

const wordVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  show: { y: "0%", opacity: 1 },
};

export function RevealWords({ text, className, delay = 0, once = true }: RevealTextProps) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i}>
          <motion.span
            className="inline-block overflow-hidden pb-[0.15em] -mb-[0.15em]"
            initial="hidden"
            whileInView="show"
            viewport={{ once, amount: 0.6 }}
          >
            <motion.span
              className="inline-block"
              variants={wordVariants}
              transition={{
                duration: 0.7,
                delay: delay + i * 0.035,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
