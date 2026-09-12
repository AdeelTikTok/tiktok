import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "tiktok_shop_solutions",
});

async function createUsersTable() {
  const connection = await pool.getConnection();
  try {
    // Create users table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) UNIQUE NOT NULL,
        phone VARCHAR(20),
        password VARCHAR(255) NOT NULL,
        last_login TIMESTAMP NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    console.log("✓ Users table created");

    // Hash password
    const hashedPassword = await bcrypt.hash("Pakistan@1947", 10);

    // Insert admin user
    await connection.execute(
      "INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)",
      ["Admin", "adeel123@gmail.com", null, hashedPassword]
    );
    console.log("✓ Admin user created: adeel123@gmail.com");
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      console.log("✓ Admin user already exists");
    } else if (error.code !== "ER_TABLE_EXISTS_ERROR") {
      console.error("Error:", error.message);
    } else {
      console.log("✓ Users table already exists");
    }
  } finally {
    connection.release();
    await pool.end();
  }
}

createUsersTable();
