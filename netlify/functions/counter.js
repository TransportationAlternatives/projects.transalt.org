const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const store = getStore({ name: "counters", consistency: "strong" });

    const current = await store.get("visits", { type: "text" });
    const count = (parseInt(current || "0") || 0) + 1;
    await store.set("visits", String(count));

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store"
      },
      body: JSON.stringify({ count })
    };
  } catch (err) {
    console.error("Counter error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Counter unavailable" })
    };
  }
};
