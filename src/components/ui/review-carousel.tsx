"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Review = {
  id: number;
  name: string;
  review: string;
  rating: number;
  created_at: string;
};

type ReviewCarouselProps = {
  reviews: Review[];
};

export function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  function next() {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % reviews.length);
  }

  function prev() {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-16 text-paper/40">
        <p>No reviews yet. Be the first!</p>
      </div>
    );
  }

  const review = reviews[current];

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Carousel */}
      <div className="w-full max-w-2xl relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
          >
            <div className="group relative rounded-2xl border border-line/20 bg-gradient-to-br from-ink-2 to-ink-3 p-8 hover:border-gold/40 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(232,188,16,0.1)]">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-gold text-2xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-paper/80 text-lg leading-relaxed mb-6">
                &quot;{review.review}&quot;
              </p>

              {/* Author & Date */}
              <div className="pt-6 border-t border-line/10">
                <p className="font-medium text-paper text-base">{review.name}</p>
                <p className="text-sm text-paper/40 mt-2">
                  {new Date(review.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>

              {/* Gradient Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {reviews.length > 1 && (
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 md:flex items-center gap-2">
            <button
              onClick={prev}
              className="h-10 w-10 rounded-full border border-line/30 bg-ink-2 hover:bg-ink-3 flex items-center justify-center transition-all hover:border-gold/50"
            >
              <span className="text-gold">←</span>
            </button>
          </div>
        )}

        {reviews.length > 1 && (
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 md:flex items-center gap-2">
            <button
              onClick={next}
              className="h-10 w-10 rounded-full border border-line/30 bg-ink-2 hover:bg-ink-3 flex items-center justify-center transition-all hover:border-gold/50"
            >
              <span className="text-gold">→</span>
            </button>
          </div>
        )}
      </div>

      {/* Indicators */}
      {reviews.length > 1 && (
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-2 rounded-full transition-all ${
                i === current
                  ? "w-8 bg-gold"
                  : "w-2 bg-paper/20 hover:bg-paper/40"
              }`}
            />
          ))}
        </div>
      )}

      {/* Review Count Badge */}
      {reviews.length > 0 && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-ink-2/50 border border-line/20 w-fit">
          <div className="flex -space-x-2">
            {reviews.slice(0, 3).map((r, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-light to-gold-dark flex items-center justify-center text-xs font-bold text-ink border border-ink"
              >
                {r.name.charAt(0)}
              </div>
            ))}
          </div>
          <div className="text-sm">
            <p className="text-gold font-medium">{reviews.length} verified reviews</p>
            <p className="text-paper/50 text-xs">from real sellers</p>
          </div>
        </div>
      )}
    </div>
  );
}
