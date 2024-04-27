import React from "react";

function TileSetter() {
  return (
    <main className="min-w-full">
      <section className="min-w-full min-h-screen">
        <div className="min-h-[500px] flex flex-col items-center justify-evenly space-y-12 ">
          <h1 className="text-3xl font-semi-bold text-center lg:text-6xl text-picton-blue-500">
            Elevate Your Space with <br /> Expert Craftsmanship
          </h1>

          <h4 className="max-w-md mx-auto text-sm text-center text-gray-400 lg:text-md lg:text-left lg:mt-0 lg:mx-0">
            Experience the Difference
          </h4>

          <p className="max-w-md mx-auto text-sm text-center text-picton-blue-400 md:text-md lg:text-lg lg:mt-0 lg:mx-0">
            Transform Your Vision into Reality with Yan&apos;s skilled Tile Craftsmanship and Impeccable Attention to Detail.
          </p>
          <button className="bg-picton-blue-400 text-white px-4 py-4 rounded shadow-md border border-picton-blue-500 md:text-base hover:bg-white hover:text-picton-blue-300">Request a Free Consultation</button>
        </div>
      </section>
      

      <section className="min-h-[250px] bg-picton-blue-400 p-16">
        <h2 className="text-3xl font-semi-bold text-center lg:text-6xl text-picton-blue-100">
           Why not choose professional tile setting?
        </h2>
        <div className="h-1/2 flex flex-col items-center justify-center p-6 space-y-4 lg:flex-row lg:h-[500px] lg:space-x-6">
          <p className="max-w-md mx-auto text-sm text-center mb-4 text-white md:text-md  lg:text-lg lg:text-left lg:mt-0 lg:mx-0">
            <span className="text-md font-extrabold">Proper tile setting</span> is essential for achieving durable, long-lasting
            results that enhance the beauty and functionality of your space.
          </p>
          <p className="max-w-md mx-auto text-sm text-center mb-4 text-white lg:text-lg lg:text-left lg:mt-0 lg:mx-0">
            With <span className="text-md font-extrabold">professional expertise</span>, you can ensure precise alignment,
            seamless transitions, and superior craftsmanship that withstands the
            test of time.
          </p>
          <p className="max-w-md mx-auto text-sm text-center  text-white lg:text-lg lg:text-left lg:mt-0 lg:mx-0">
            Trusting your tile installation to an <span className="text-md font-extrabold">experienced professional</span> like
            Yan ensures peace of mind and stunning results that exceed your
            expectations.
          </p>
        </div>
      </section>
    </main>
  );
}

export default TileSetter;
