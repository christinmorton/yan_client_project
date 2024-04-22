import React from "react";

import HomepageContactForm from "@/components/forms/HomepageContactForm";

function ContactUs() {
  return (
    <main className="min-w-full">
      <section className="min-w-full p-16 lg:p-36  bg-slate-100">
        <div className="">
          <h1 className="text-3xl font-semi-bold text-center lg:text-4xl text-picton-blue-500">🏗️ Transforming Spaces with Expert Tile Setting Services</h1>
          {/* <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
            Are you looking to elevate the aesthetic appeal of your home or
            workspace? Meet Yan, your trusted partner in crafting stunning tile
            designs that breathe new life into any environment. With over two
            decades of hands-on experience in construction work, Yan brings a
            wealth of expertise to every project he undertakes.
          </p> */}
          {/* <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
            Originally from Ukraine, Yan&apos;s journey in the United States has been
            nothing short of remarkable. After honing his skills in the bustling
            streets of New York City for 11 years, he now calls the vibrant city
            of Las Vegas his home.
          </p> */}
        </div>
      </section>

      <div className="min-w-full min-h-screen  bg-slate-100">
        <div className="">
          <h1 className="text-xl font-semi-bold text-center md:text-2xl lg:text-4xl text-picton-blue-500">Contact Us</h1>
          <div className="p-36">
            <HomepageContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactUs;
