import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { getSession } from "@/lib/auth";

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

// GET all reviews (admin view)
export async function GET() {
  // Check authentication
  const session = await getSession();
  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.execute(
        "SELECT id, name, review, rating, created_at, approved FROM reviews ORDER BY created_at DESC"
      );

      return NextResponse.json(rows);
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}

// PUT to update review approval status
export async function PUT(request: NextRequest) {
  // Check authentication
  const session = await getSession();
  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { id, approved } = body;

    if (!id || approved === undefined) {
      return NextResponse.json(
        { error: "ID and approved status are required" },
        { status: 400 }
      );
    }

    const connection = await pool.getConnection();
    try {
      await connection.execute(
        "UPDATE reviews SET approved = ? WHERE id = ?",
        [approved, id]
      );

      return NextResponse.json({
        success: true,
        message: approved ? "Review approved" : "Review unapproved",
      });
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to update review" },
      { status: 500 }
    );
  }
}

// DELETE review
export async function DELETE(request: NextRequest) {
  // Check authentication
  const session = await getSession();
  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Review ID is required" },
        { status: 400 }
      );
    }

    const connection = await pool.getConnection();
    try {
      await connection.execute("DELETE FROM reviews WHERE id = ?", [id]);

      return NextResponse.json({
        success: true,
        message: "Review deleted successfully",
      });
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to delete review" },
      { status: 500 }
    );
  }
}
