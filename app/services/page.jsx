import Link from "next/link";
import React from "react";

function Services() {
  return (
    <main className="grid grid-cols-3 gap-2">
      <h1>Services</h1>

      <div>
        <h2>Tile Setting Services</h2>
        <p>
          Yan specializes in transforming spaces through expert tile setting.
          From intricate mosaic patterns to sleek, contemporary designs, Yan's
          portfolio showcases his versatility and commitment to craftsmanship.
        </p>
        <Link href="/services/tile-setter">learn more about Yan's tile setting services</Link>
      </div>
    </main>
  );
}

export default Services;
