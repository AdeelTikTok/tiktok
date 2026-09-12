import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
  try {
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

    const connection = await pool.getConnection();
    try {
      // Create reviews table
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

      return NextResponse.json({
        success: true,
        message: "Database initialized successfully. Reviews table created.",
      });
    } finally {
      connection.release();
      await pool.end();
    }
  } catch (error) {
    console.error("Database initialization error:", error);
    return NextResponse.json(
      {
        success: false,
        error: String(error),
        message: "Failed to initialize database. Check your .env.local credentials.",
      },
      { status: 500 }
    );
  }
}
