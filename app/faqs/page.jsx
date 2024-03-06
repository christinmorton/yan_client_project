import React from "react";

function Faqs() {
  return (
    <main className="min-w-full">
      <div className="min-w-full min-h-screen grid grid-cols-4 bg-slate-100">
        <div className="col-start-2 col-end-4">
          <h1>Frequently Asked Questions</h1>
          <h2>FAQ: Your Guide to Expert Tile Setting Services</h2>

          <p>
            Hero Section: [Background Image: A welcoming and inviting tiled
            space]{" "}
          </p>
        </div>
      </div>

      <div className="min-h-[250px] m-44 grid grid-cols-4 gap-6">
        <div className="col-start-3 col-end-5">
          <h3>{`Welcome to Yan's FAQ Page`}</h3>

          <h4>
            Your Comprehensive Resource for Answers to Common Questions About
            Tile Setting Services{" "}
          </h4>

          <p>
           {` Whether you're curious about our process, wondering what sets us
            apart, or seeking guidance on your upcoming tile project, you'll
            find the answers you need right here. Explore our frequently asked
            questions below and discover why Yan is the trusted choice for
            expert tile setting in the Las Vegas City area. If you don't see
            your question listed, don't hesitate to reach out to us directly for
            personalized assistance. Let's turn your vision into reality
            together.`}
          </p>
        </div>
      </div>
      {/* max-w-[700px] flex flex-col justify-around content-around mx-auto */}
      <div className="grid grid-cols-3 grid-row-4 gap-6 p-24">
        <div className="p-12">
          <h3>Q: How long has Yan been in the tile setting business?</h3>
          <p>
            A: Yan has over two decades of experience in the construction
            industry, specializing in tile setting for both residential and
            commercial projects. His passion for craftsmanship and dedication to
            excellence are evident in every project he undertakes.
          </p>
          <h5>User Name: Sarah, Female</h5>
        </div>

        <div className="p-12 bg-slate-300">
          <h3>Q: What sets Yan apart from other tile setters?</h3>
          <p>
            {`A: Yan's attention to detail, precision craftsmanship, and
            personalized approach set him apart from the competition. With a
            background in construction work and specialized training in tile
            setting, Yan combines technical expertise with artistic flair to
            deliver stunning results that exceed expectations.`}
          </p>
          <h5>User Name: Michael, Male</h5>
        </div>

        <div className="p-12">
          <h3>Q: Does Yan provide consultations before starting a project?</h3>
          <p>
            {`A: Absolutely! Yan offers free consultations to discuss your project
            goals, preferences, and budget. During the consultation, he'll
            assess your space, provide design recommendations, and answer any
            questions you may have to ensure a seamless and successful project.`}
          </p>
          <h5>User Name: Emily, Female</h5>
        </div>

        <div className="p-12 bg-slate-300">
          <h3>Q: What types of tile projects does Yan specialize in?</h3>
          <p>
            {`A: Yan specializes in a wide range of tile projects, including
            kitchen backsplashes, bathroom renovations, flooring installations,
            shower surrounds, and more. Whether you're looking for classic
            elegance or modern sophistication, Yan has the expertise to bring
            your vision to life.`}
          </p>
          <h5>User Name: Jason, Male</h5>
        </div>

        <div className="p-12">
          <h3>Q: Can Yan work with my specific design preferences?</h3>
          <p>
            {`A: Absolutely! Yan takes pride in collaborating closely with clients
            to understand their unique design preferences and vision for their
            space. Whether you have a specific pattern, color scheme, or style
            in mind, Yan will work with you to create a customized design that
            reflects your taste and personality.`}
          </p>
          <h5>User Name: Olivia, Female</h5>
        </div>

        <div className="p-12 bg-slate-300">
          <h3>Q: How long does a typical tile installation project take?</h3>
          <p>
            {`A: The duration of a tile installation project can vary depending on
            factors such as the size of the space, the complexity of the design,
            and the materials used. During your consultation, Yan will provide
            an estimated timeline for your project based on its specific
            requirements.`}
          </p>
          <h5>User Name: David, Male</h5>
        </div>

        <div className="p-12">
          <h3>Q: Does Yan use environmentally friendly materials?</h3>
          <p>
            {`A: Yes, Yan is committed to sustainability and environmental
            responsibility. He sources high-quality materials from reputable
            suppliers that meet eco-friendly standards, ensuring that your tile
            installation not only looks beautiful but also contributes to a
            healthier planet.`}
          </p>
          <h5>User Name: Emma, Female</h5>
        </div>

        <div className="p-12 bg-slate-300">
          <h3>{`Q: What is Yan's approach to customer satisfaction?`}</h3>
          <p>
            {`A: Customer satisfaction is Yan's top priority. From the initial
            consultation to the final installation, Yan is dedicated to
            delivering exceptional service, clear communication, and superior
            craftsmanship. He strives to exceed your expectations and ensure
            that you're delighted with the results.`}
          </p>
          <h5>User Name: John, Male</h5>
        </div>

        <div className="p-12">
          <h3>Q: Can Yan provide references or examples of past projects?</h3>
          <p>
           {` A: Certainly! Yan is proud to showcase his portfolio of past
            projects, featuring a diverse range of tile installations that
            highlight his expertise and creativity. Feel free to browse through
            his gallery to gain inspiration for your own project.`}
          </p>
          <h5>User Name: Ashley, Female</h5>
        </div>

        <div className="p-12 bg-slate-300">
          <h3>{`Q: How do I get started with Yan's tile setting services?`}</h3>
          <p>
            {`A: Getting started with Yan is easy! Simply contact us to schedule
            your free consultation. During the consultation, Yan will discuss
            your project goals, provide design recommendations, and offer a
            personalized quote. Take the first step towards transforming your
            space with expert tile setting today!`}
          </p>
          <h5>User Name: Alex, Male</h5>
        </div>
      </div>
    </main>
  );
}

export default Faqs;
