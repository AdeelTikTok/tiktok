"use client";

import { useState, useEffect } from "react";
import { Kicker } from "@/components/ui/kicker";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { ReviewCarousel } from "@/components/ui/review-carousel";
import { StarRating } from "@/components/ui/star-rating";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type Review = {
  id: number;
  name: string;
  review: string;
  rating: number;
  created_at: string;
};

export default function Reviews({ dict }: { dict: Dictionary["reviews"] }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [formData, setFormData] = useState({ name: "", review: "", rating: 5 });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        }
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      }
    };
    loadReviews();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", review: "", rating: 5 });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        const err = await response.json();
        setError(err.error || dict.genericError);
      }
    } catch (err) {
      setError(dict.genericError);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative bg-ink py-28 sm:py-36 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container-px mx-auto max-w-[1400px] relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <Kicker dark className="mx-auto justify-center">
            {dict.kicker}
          </Kicker>
          <h2 className="font-display mt-6 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] tracking-tight text-paper max-w-4xl mx-auto">
            <RevealWords text={dict.heading} />
          </h2>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-paper/60">
              {dict.body}
            </p>
          </Reveal>
        </div>

        {/* Reviews Carousel + Form */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Reviews Carousel */}
          <div className="lg:col-span-2 flex items-center">
            <ReviewCarousel reviews={reviews} />
          </div>

          {/* Right: Review Form */}
          <div>
            <div className="rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/5 to-transparent p-8 sticky top-24">
              <h3 className="font-display text-2xl text-paper mb-6">{dict.formHeading}</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder={dict.namePlaceholder}
                    className="w-full rounded-lg border border-line/30 bg-ink-2 px-4 py-2.5 text-paper placeholder-paper/30 text-sm transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  />
                </div>

                <div>
                  <textarea
                    required
                    value={formData.review}
                    onChange={(e) =>
                      setFormData({ ...formData, review: e.target.value })
                    }
                    placeholder={dict.reviewPlaceholder}
                    rows={4}
                    className="w-full rounded-lg border border-line/30 bg-ink-2 px-4 py-2.5 text-paper placeholder-paper/30 text-sm transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-paper mb-3">{dict.ratingLabel}</label>
                  <StarRating
                    rating={formData.rating}
                    onChange={(rating) => setFormData({ ...formData, rating })}
                  />
                </div>

                {error && (
                  <p className="rounded-lg bg-red-500/10 p-3 text-xs text-red-400">
                    {error}
                  </p>
                )}

                {submitted && (
                  <p className="rounded-lg bg-green-500/10 p-3 text-xs text-green-400">
                    {dict.successMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-gradient-to-r from-gold to-gold-dark px-4 py-2.5 font-medium text-ink transition-all hover:shadow-[0_10px_30px_rgba(232,188,16,0.3)] disabled:opacity-50"
                >
                  {loading ? dict.submitting : dict.submit}
                </button>

                <p className="text-xs text-paper/40 text-center">
                  {dict.moderationNote}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
