import fetch from "node-fetch";

const BASE_URL = "http://localhost:3000";

async function testAuth() {
  console.log("🔐 Testing Authentication System\n");

  // Test 1: Try to access admin reviews without login (should fail)
  console.log("1️⃣  Test: Access /admin/reviews without login");
  try {
    const res = await fetch(`${BASE_URL}/api/admin/reviews`);
    console.log(`   Status: ${res.status} ${res.status === 401 ? "✓ (401 Unauthorized)" : "❌ (Expected 401)"}\n`);
  } catch (err) {
    console.log(`   ❌ Error: ${err.message}\n`);
  }

  // Test 2: Login with correct credentials
  console.log("2️⃣  Test: Login with correct credentials");
  try {
    const res = await fetch(`${BASE_URL}/api/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "adeel123@gmail.com",
        password: "Pakistan@1947",
      }),
    });
    console.log(`   Status: ${res.status} ${res.status === 200 ? "✓" : "❌"}`);
    if (res.status === 200) {
      const setCookie = res.headers.get("set-cookie");
      console.log(`   Session Cookie: ${setCookie ? "✓ Set" : "❌ Not Set"}\n`);
    } else {
      const err = await res.json();
      console.log(`   Error: ${err.error}\n`);
    }
  } catch (err) {
    console.log(`   ❌ Error: ${err.message}\n`);
  }

  // Test 3: Login with wrong password
  console.log("3️⃣  Test: Login with wrong password");
  try {
    const res = await fetch(`${BASE_URL}/api/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "adeel123@gmail.com",
        password: "wrongpassword",
      }),
    });
    console.log(`   Status: ${res.status} ${res.status === 401 ? "✓ (401 Unauthorized)" : "❌ (Expected 401)"}\n`);
  } catch (err) {
    console.log(`   ❌ Error: ${err.message}\n`);
  }

  // Test 4: Submit review with rating
  console.log("4️⃣  Test: Submit review with rating");
  try {
    const res = await fetch(`${BASE_URL}/api/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test User",
        review: "This is a test review!",
        rating: 4,
      }),
    });
    console.log(`   Status: ${res.status} ${res.status === 201 ? "✓" : "❌"}`);
    const data = await res.json();
    console.log(`   Message: ${data.message || data.error}\n`);
  } catch (err) {
    console.log(`   ❌ Error: ${err.message}\n`);
  }

  console.log("✅ Testing complete!");
}

testAuth().catch(console.error);
