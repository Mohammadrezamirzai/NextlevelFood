"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An erroroccured!</h1>
      <p>Failed to fetch data. Please try again later.</p>
    </main>
  );
}
