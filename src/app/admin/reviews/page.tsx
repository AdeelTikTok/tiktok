"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Review = {
  id: number;
  name: string;
  review: string;
  rating: number;
  created_at: string;
  approved: boolean;
};

export default function AdminReviews() {
  const router = useRouter();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "approved" | "pending">("all");
  const [actionLoading, setActionLoading] = useState<number | null>(null);

  useEffect(() => {
    checkAuthAndFetch();
  }, []);

  async function checkAuthAndFetch() {
    try {
      // First check if admin is authenticated by trying to fetch reviews
      const response = await fetch("/api/admin/reviews");

      if (response.status === 401) {
        // Not authenticated, redirect to login
        router.replace("/admin/login");
        return;
      }

      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      } else {
        console.error("Failed to fetch reviews");
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  }

  async function updateReview(id: number, action: "approve" | "reject" | "delete") {
    setActionLoading(id);
    try {
      const endpoint =
        action === "delete" ? `/api/admin/reviews?id=${id}` : "/api/admin/reviews";
      const method = action === "delete" ? "DELETE" : "PUT";
      const body =
        action === "delete"
          ? undefined
          : JSON.stringify({
              id,
              approved: action === "approve",
            });

      const response = await fetch(endpoint, {
        method,
        headers: body ? { "Content-Type": "application/json" } : undefined,
        body,
      });

      if (response.ok) {
        if (action === "delete") {
          setReviews(reviews.filter((r) => r.id !== id));
        } else {
          setReviews(
            reviews.map((r) =>
              r.id === id
                ? { ...r, approved: action === "approve" }
                : r
            )
          );
        }
      }
    } catch (error) {
      console.error("Error updating review:", error);
    } finally {
      setActionLoading(null);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/");
  }

  const filteredReviews = reviews.filter((r) => {
    if (filter === "approved") return r.approved;
    if (filter === "pending") return !r.approved;
    return true;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-ink via-ink-soft to-ink-2">
      {/* Header */}
      <header className="border-b border-line bg-ink-2/80 backdrop-blur sticky top-0 z-40">
        <div className="container-px mx-auto max-w-6xl py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold-light to-gold-dark flex items-center justify-center">
              <span className="text-ink font-display font-bold">TS</span>
            </div>
            <div>
              <p className="font-display text-sm text-paper font-bold">TikTok Shop</p>
              <p className="text-xs text-gold">Admin</p>
            </div>
          </Link>
          <button
            onClick={handleLogout}
            className="text-sm text-gold hover:text-gold-light transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="container-px mx-auto max-w-6xl py-12">
        <div className="mb-8">
          <h1 className="font-display text-4xl text-paper mb-2">Review Management</h1>
          <p className="text-paper/50">
            Total: <span className="text-gold">{reviews.length}</span> | Approved:{" "}
            <span className="text-green-400">{reviews.filter((r) => r.approved).length}</span> |
            Pending: <span className="text-yellow-400">{reviews.filter((r) => !r.approved).length}</span>
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-6 flex gap-3 border-b border-line/50 pb-4">
          {(["all", "approved", "pending"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 font-medium capitalize rounded-lg transition-all ${
                filter === f
                  ? "bg-gold text-ink"
                  : "text-paper/60 hover:text-paper hover:bg-ink-2/50"
              }`}
            >
              {f === "all" && "All"}
              {f === "approved" && "✓ Approved"}
              {f === "pending" && "⏳ Pending"}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        {loading ? (
          <p className="text-center text-paper/50 py-12">Loading reviews...</p>
        ) : filteredReviews.length === 0 ? (
          <p className="text-center text-paper/50 py-12">
            {filter === "approved" && "No approved reviews yet."}
            {filter === "pending" && "No pending reviews."}
            {filter === "all" && "No reviews yet."}
          </p>
        ) : (
          <div className="grid gap-4">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className={`rounded-xl border p-6 transition-all ${
                  review.approved
                    ? "border-green-500/20 bg-green-500/5"
                    : "border-yellow-500/20 bg-yellow-500/5"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-lg text-paper font-semibold">
                        {review.name}
                      </h3>
                      <div className="flex gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">
                            ★
                          </span>
                        ))}
                      </div>
                      <span
                        className={`ml-auto px-3 py-1 rounded-full text-xs font-medium ${
                          review.approved
                            ? "bg-green-500/20 text-green-300"
                            : "bg-yellow-500/20 text-yellow-300"
                        }`}
                      >
                        {review.approved ? "✓ Approved" : "⏳ Pending"}
                      </span>
                    </div>
                    <p className="text-paper/70 leading-relaxed mb-2">
                      &quot;{review.review}&quot;
                    </p>
                    <p className="text-xs text-paper/40">
                      {new Date(review.created_at).toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 flex-wrap">
                  {!review.approved && (
                    <button
                      onClick={() => updateReview(review.id, "approve")}
                      disabled={actionLoading === review.id}
                      className="rounded-lg bg-green-500/20 text-green-300 px-4 py-2 text-sm font-medium hover:bg-green-500/30 transition-colors disabled:opacity-50"
                    >
                      ✓ Approve
                    </button>
                  )}
                  {review.approved && (
                    <button
                      onClick={() => updateReview(review.id, "reject")}
                      disabled={actionLoading === review.id}
                      className="rounded-lg bg-yellow-500/20 text-yellow-300 px-4 py-2 text-sm font-medium hover:bg-yellow-500/30 transition-colors disabled:opacity-50"
                    >
                      ⏳ Unapprove
                    </button>
                  )}
                  <button
                    onClick={() => updateReview(review.id, "delete")}
                    disabled={actionLoading === review.id}
                    className="rounded-lg bg-red-500/20 text-red-300 px-4 py-2 text-sm font-medium hover:bg-red-500/30 transition-colors disabled:opacity-50"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
