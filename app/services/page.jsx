import Link from "next/link";
import React from "react";

function Services() {
  return (
    <main className="min-w-full">
      <div className="min-w-full min-h-screen grid grid-cols-4 bg-slate-100">
      <h1>Services</h1>

<div>
  <h2>Tile Setting Services</h2>
  <p>
    {`Yan specializes in transforming spaces through expert tile setting.
    From intricate mosaic patterns to sleek, contemporary designs, Yan's
    portfolio showcases his versatility and commitment to craftsmanship.`}
  </p>
  <Link href="/services/tile-setter">{`learn more about Yan's tile setting services`}</Link>
</div>
      </div>
      
    </main>
  );
}

export default Services;
