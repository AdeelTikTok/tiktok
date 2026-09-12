import mysql from "mysql2/promise";

const testReviews = [
  {
    name: "Sarah Chen",
    review: "Absolutely transformed our TikTok Shop sales! The team's expertise in category approvals saved us weeks of hassle.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    review: "Professional and results-driven. Our shop went from zero orders to 500+ per month in 3 months.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    review: "Outstanding support throughout the entire process. They really understand TikTok Shop's ecosystem.",
    rating: 5,
  },
  {
    name: "David Rodriguez",
    review: "Best decision we made was hiring them. The ads optimization alone paid for itself 10x over.",
    rating: 5,
  },
  {
    name: "Lisa Park",
    review: "Their creator outreach strategy helped us build authentic partnerships that actually convert.",
    rating: 5,
  },
  {
    name: "James Taylor",
    review: "Highly recommended. They handled our account suspension perfectly and got us back online in days.",
    rating: 5,
  },
  {
    name: "Nicole Dubois",
    review: "Operating across 3 markets simultaneously is easy with their 360° management approach.",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    review: "Their violation removal expertise saved our business when we got hit with unexpected compliance issues.",
    rating: 5,
  },
  {
    name: "Sophie Mueller",
    review: "The product hunting and listing optimization increased our AOV by 40%. Incredible results.",
    rating: 5,
  },
  {
    name: "Carlos Mendez",
    review: "Professional, transparent, and genuinely invested in our success. Not just a vendor, a true partner.",
    rating: 5,
  },
  {
    name: "Rachel Goldman",
    review: "Their white label solution let us scale without the overhead. Game changer for our business.",
    rating: 5,
  },
  {
    name: "Tom Bradley",
    review: "From zero to hero in 90 days. Their team knows TikTok Shop better than anyone I've worked with.",
    rating: 5,
  },
];

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "tiktok_shop_solutions",
});

async function addReviews() {
  const connection = await pool.getConnection();
  try {
    for (const review of testReviews) {
      await connection.execute(
        "INSERT INTO reviews (name, review, rating, approved) VALUES (?, ?, ?, ?)",
        [review.name, review.review, review.rating, true]
      );
    }
    console.log(`✓ Added ${testReviews.length} test reviews`);
  } catch (error) {
    console.error("Error adding reviews:", error.message);
  } finally {
    connection.release();
    await pool.end();
  }
}

addReviews();
