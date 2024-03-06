import React from "react";

function AboutUs() {
  return (
    <main className="min-w-full">
      <div className="min-w-full min-h-screen grid grid-cols-4 bg-slate-100">
        <div className="col-start-2 col-end-4">
        <h1>About Us</h1>
        <h1>About Yan: Expert Tile Setter and Craftsman</h1>
        <h2>
          Hero Section: Background Image: Yan at work, meticulously laying
          tiles
        </h2>
        <h2>Meet Yan: Master Craftsman and Tile Setting Specialist</h2>
        <p>
          Ukrainian-born Yan brings over 20 years of construction expertise to
          every project.
        </p>
        <p>
          Formerly based in New York City for 11 years, Yan now calls Las Vegas
          home.
        </p>
        <p>
          With a passion for precision and an eye for detail, Yan specializes in
          transforming spaces through expert tile setting.
        </p>
        </div>
      </div>

      <div className="min-h-[250px] m-44 grid grid-cols-4 gap-6">
        <div className="col-start-2 col-end-4">
        Section 1:
        <h2>{`Yan's Journey Heading: From Ukraine to the USA: Yan's Story`}</h2>
        <p>
          {`Yan's journey began 15 years ago when he made the bold decision to
          relocate to the United States in pursuit of new opportunities.`}
        </p>
        <p>
          His time in New York City served as a crucible for honing his craft,
          where he immersed himself in the demanding world of construction work.
        </p>
        <p>
          In Las Vegas, Yan continues to build on his legacy of excellence,
          bringing a unique blend of international flair and American ingenuity
          to his tile setting projects.
        </p>
        </div>
      </div>

      <div className="min-w-full min-h-screen grid grid-cols-4 bg-slate-100">
        <div className="col-start-2 col-end-4">
        Section 2:
        <h2>
          {`Craftsmanship and Expertise Heading: The Art of Tile Setting: Yan's
          Approach`}
        </h2>
        <p>
          With over two decades of hands-on experience, Yan has mastered the art
          of tile setting, combining traditional techniques with modern
          innovations.
        </p>
        <p>
          {`From intricate mosaic patterns to sleek, contemporary designs, Yan's
          portfolio showcases his versatility and commitment to craftsmanship.`}
        </p>
        <p>
          {`Whether it's a residential renovation or a commercial installation,
          Yan approaches each project with meticulous attention to detail and a
          dedication to exceeding client expectations.`}
        </p>
        </div>
        
      </div>

      <div className="min-h-[250px] m-44 grid grid-cols-4 gap-6">
        <div className="col-start-2 col-end-4">
        Section 3:
        <h2>Client Testimonials Heading: What Our Clients Say About Yan</h2>
        <p>
          {`"Yan's professionalism and expertise made our tile renovation project
          a breeze. We couldn't be happier with the results!" - Sarah, Las Vegas`}
        </p>
        <p>
          {`"From start to finish, Yan demonstrated a level of skill and precision
          that is truly unmatched. I highly recommend him for any tile setting
          project." - Michael, New York City`}
        </p>
        <p>
          {`Join the ranks of our satisfied clients and experience the difference
          with Yan's expert tile setting services. Contact us today to discuss
          your project needs and schedule a consultation.`}
        </p>
        </div>
        
      </div>

      <div className="min-w-full min-h-screen grid grid-cols-4 bg-slate-100">
        <div className="col-start-2 col-end-4">
          <h3>Call to Action:</h3>
        <button>Contact Yan Today</button>
        <p>
          {`Ready to elevate your space with expert tile setting? Don't hesitate
          to reach out to Yan to discuss your project requirements. Whether
          you're planning a renovation or starting from scratch, Yan is here to
          bring your vision to life. Get in touch now to schedule your
          consultation.`}
        </p>
        </div>
        
      </div>
    </main>
  );
}

export default AboutUs;
