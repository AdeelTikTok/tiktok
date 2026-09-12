import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "3306"),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "tiktok_shop_solutions",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function GET() {
  try {
    const connection = await pool.getConnection();
    try {
      // Ensure table exists
      await connection.execute(`
        CREATE TABLE IF NOT EXISTS reviews (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          review TEXT NOT NULL,
          rating INT DEFAULT 5,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          approved BOOLEAN DEFAULT FALSE
        )
      `);

      const [rows] = await connection.execute(
        "SELECT id, name, review, rating, created_at FROM reviews WHERE approved = TRUE ORDER BY created_at DESC LIMIT 20"
      );

      return NextResponse.json(rows);
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews", details: String(error) },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, review, rating = 5 } = body;

    if (!name || !review) {
      return NextResponse.json(
        { error: "Name and review are required" },
        { status: 400 }
      );
    }

    // Validate rating is between 1 and 5
    const validatedRating = Math.max(1, Math.min(5, Math.round(rating || 5)));

    const connection = await pool.getConnection();
    try {
      // Ensure table exists
      await connection.execute(`
        CREATE TABLE IF NOT EXISTS reviews (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          review TEXT NOT NULL,
          rating INT DEFAULT 5,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          approved BOOLEAN DEFAULT FALSE
        )
      `);

      await connection.execute(
        "INSERT INTO reviews (name, review, rating, approved) VALUES (?, ?, ?, ?)",
        [name, review, validatedRating, false]
      );

      return NextResponse.json(
        { success: true, message: "Review submitted successfully. It will appear after approval." },
        { status: 201 }
      );
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to submit review", details: String(error) },
      { status: 500 }
    );
  }
}
