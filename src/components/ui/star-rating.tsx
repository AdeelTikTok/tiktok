"use client";

import { useState } from "react";

type StarRatingProps = {
  rating: number;
  onChange: (rating: number) => void;
};

export function StarRating({ rating, onChange }: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          className="relative transition-transform hover:scale-110"
        >
          <span
            className={`text-3xl transition-all ${
              star <= (hoverRating || rating)
                ? "text-gold drop-shadow-[0_0_8px_rgba(232,188,16,0.6)]"
                : "text-paper/20"
            }`}
          >
            ★
          </span>
        </button>
      ))}
    </div>
  );
}
