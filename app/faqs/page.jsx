import React from "react";

function Faqs() {
  return (
    <main className="min-w-full">
      <div className="min-w-full min-h-screen grid grid-cols-4 bg-picton-blue-400">
        <div className="col-start-2 col-end-4">
          <h1 className="text-lg font-semi-bold text-center  mb-2 lg:text-xl lg:text-left text-picton-blue-200">Frequently Asked Questions</h1>
          <h2 className="text-lg font-semi-bold text-center  mb-2 lg:text-xl lg:text-left text-picton-blue-200">FAQ: Your Guide to Expert Tile Setting Services</h2>

          <h3 className="text-3xl font-semi-bold text-center lg:text-6xl lg:text-left text-picton-blue-100">Welcome to Yan&apos;s FAQ Page</h3>

          <h4 className="text-lg font-semi-bold text-center  mb-2 lg:text-xl lg:text-left text-picton-blue-200">
            Your Comprehensive Resource for Answers to Common Questions About
            Tile Setting Services
          </h4>

          <p className="max-w-md mx-auto text-sm text-center mb-4 text-white lg:text-lg lg:text-left lg:mt-0 lg:mx-0">
           Whether you&apos;re curious about our process, wondering what sets us
            apart, or seeking guidance on your upcoming tile project, you&apos;ll
            find the answers you need right here. Explore our frequently asked
            questions below and discover why Yan is the trusted choice for
            expert tile setting in the Las Vegas City area. If you don&apos;t see
            your question listed, don&apos;t hesitate to reach out to us directly for
            personalized assistance. Let&apos;s turn your vision into reality
            together.
          </p>
        </div>
      </div>

      {/* <div className="min-h-[250px] m-44 grid grid-cols-4 gap-6">
        <div className="col-start-3 col-end-5">
          
        </div>
      </div> */}
      
      <div className="flex flex-col items-center justify-around lg:grid lg:grid-cols-3 lg:grid-row-4 lg:gap-6 p-24">
        <div className="p-12">
          <h3 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-md lg:text-left lg:mt-0 lg:mx-0"><span>Q:</span> How long has Yan been in the tile setting business?</h3>
          <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
            <span>A:</span> Yan has over two decades of experience in the construction
            industry, specializing in tile setting for both residential and
            commercial projects. His passion for craftsmanship and dedication to
            excellence are evident in every project he undertakes.
          </p>
          <h5 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-md lg:text-left lg:mt-0 lg:mx-0">User Name: Sarah</h5>
        </div>

        <div className="p-12 bg-slate-300">
          <h3 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-md lg:text-left lg:mt-0 lg:mx-0"><span>Q:</span> What sets Yan apart from other tile setters?</h3>
          <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
            <span>A:</span> {`Yan's attention to detail, precision craftsmanship, and
            personalized approach set him apart from the competition. With a
            background in construction work and specialized training in tile
            setting, Yan combines technical expertise with artistic flair to
            deliver stunning results that exceed expectations.`}
          </p>
          <h5 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-md lg:text-left lg:mt-0 lg:mx-0">User Name: Michael</h5>
        </div>

        <div className="p-12">
          <h3 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-md lg:text-left lg:mt-0 lg:mx-0"><span>Q:</span> Does Yan provide consultations before starting a project?</h3>
          <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
            <span>A:</span> {`Absolutely! Yan offers free consultations to discuss your project
            goals, preferences, and budget. During the consultation, he'll
            assess your space, provide design recommendations, and answer any
            questions you may have to ensure a seamless and successful project.`}
          </p>
          <h5 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-md lg:text-left lg:mt-0 lg:mx-0">User Name: Emily</h5>
        </div>

        <div className="p-12 bg-slate-300">
          <h3 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-md lg:text-left lg:mt-0 lg:mx-0"><span>Q:</span> What types of tile projects does Yan specialize in?</h3>
          <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
            <span>A:</span> {`Yan specializes in a wide range of tile projects, including
            kitchen backsplashes, bathroom renovations, flooring installations,
            shower surrounds, and more. Whether you're looking for classic
            elegance or modern sophistication, Yan has the expertise to bring
            your vision to life.`}
          </p>
          <h5 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-md lg:text-left lg:mt-0 lg:mx-0">User Name: Jason</h5>
        </div>

        <div className="p-12">
          <h3 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-md lg:text-left lg:mt-0 lg:mx-0"><span>Q:</span> Can Yan work with my specific design preferences?</h3>
          <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
           <span>A:</span> {`Absolutely! Yan takes pride in collaborating closely with clients
            to understand their unique design preferences and vision for their
            space. Whether you have a specific pattern, color scheme, or style
            in mind, Yan will work with you to create a customized design that
            reflects your taste and personality.`}
          </p>
          <h5 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-md lg:text-left lg:mt-0 lg:mx-0">User Name: Olivia</h5>
        </div>

        <div className="p-12 bg-slate-300">
          <h3 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-md lg:text-left lg:mt-0 lg:mx-0"><span>Q:</span> How long does a typical tile installation project take?</h3>
          <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
           <span>A:</span> {`The duration of a tile installation project can vary depending on
            factors such as the size of the space, the complexity of the design,
            and the materials used. During your consultation, Yan will provide
            an estimated timeline for your project based on its specific
            requirements.`}
          </p>
          <h5 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-md lg:text-left lg:mt-0 lg:mx-0">User Name: David</h5>
        </div>

        <div className="p-12">
          <h3 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-md lg:text-left lg:mt-0 lg:mx-0"><span>Q:</span> Does Yan use environmentally friendly materials?</h3>
          <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
           <span>A:</span> {`Yes, Yan is committed to sustainability and environmental
            responsibility. He sources high-quality materials from reputable
            suppliers that meet eco-friendly standards, ensuring that your tile
            installation not only looks beautiful but also contributes to a
            healthier planet.`}
          </p>
          <h5 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-md lg:text-left lg:mt-0 lg:mx-0">User Name: Emma</h5>
        </div>

        <div className="p-12 bg-slate-300">
          <h3 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-md lg:text-left lg:mt-0 lg:mx-0"><span>Q:</span> {`What is Yan's approach to customer satisfaction?`}</h3>
          <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
           <span>A:</span> {`Customer satisfaction is Yan's top priority. From the initial
            consultation to the final installation, Yan is dedicated to
            delivering exceptional service, clear communication, and superior
            craftsmanship. He strives to exceed your expectations and ensure
            that you're delighted with the results.`}
          </p>
          <h5 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-md lg:text-left lg:mt-0 lg:mx-0">User Name: John</h5>
        </div>

        <div className="p-12">
          <h3 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-md lg:text-left lg:mt-0 lg:mx-0"><span>Q:</span> Can Yan provide references or examples of past projects?</h3>
          <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
           <span>A:</span> {` Certainly! Yan is proud to showcase his portfolio of past
            projects, featuring a diverse range of tile installations that
            highlight his expertise and creativity. Feel free to browse through
            his gallery to gain inspiration for your own project.`}
          </p>
          <h5 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-md lg:text-left lg:mt-0 lg:mx-0">User Name: Ashley</h5>
        </div>

        <div className="p-12 bg-slate-300">
          <h3 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-md lg:text-left lg:mt-0 lg:mx-0"><span>Q:</span> {`How do I get started with Yan's tile setting services?`}</h3>
          <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
           <span>A:</span> {`Getting started with Yan is easy! Simply contact us to schedule
            your free consultation. During the consultation, Yan will discuss
            your project goals, provide design recommendations, and offer a
            personalized quote. Take the first step towards transforming your
            space with expert tile setting today!`}
          </p>
          <h5 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-md lg:text-left lg:mt-0 lg:mx-0">User Name: Alex</h5>
        </div>
      </div>
    </main>
  );
}

export default Faqs;
