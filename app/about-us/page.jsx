import Image from "next/image";

import yanProfilePic from "../../public/images/Resized_Resized_20220817_124533_223826879431907.JPEG";
import projectPic1 from "../../public/images/Resized_Resized_20231109_125211_223389226286137.JPEG";
import projectPic2 from "../../public/images/Resized_Resized_20230815_102145_223622606178443.JPEG";
import projectPic3 from "../../public/images/stock/charlesdeluvio-zy0s5QJZTYo-unsplash.jpg";
import projectPic4 from "../../public/images/stock/pexels-jean-van-der-meulen-1457847.jpg";
import projectPic5 from "../../public/images/Resized_Resized_20231204_161849_223463781147931.JPEG";
import projectPic6 from '../../public/images/Resized_Resized_20240306_165443.JPEG'

function AboutUs() {
  return (
    <main className="min-w-full">
      <section className="min-w-full min-h-screen  bg-slate-100">
        <div className="">
        <h1 className="text-3xl font-semi-bold text-center lg:text-6xl lg:text-left text-picton-blue-500">Expert Tile Setter and Craftsman</h1>
        <h2 className="max-w-md mx-auto text-sm text-center text-gray-400 lg:text-md lg:text-left lg:mt-0 lg:mx-0">Meet Yan: Master Craftsman and Tile Setting Specialist</h2>

        <Image
            className=""
            src={yanProfilePic}
            alt="A stunning tiled space showcasing Yan's work"
            width={400}
            height={400}
          />

        <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
          Ukrainian-born Yan brings over 20 years of construction expertise to
          every project.
        </p>
        <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
          Formerly based in New York City for 11 years, Yan now calls Las Vegas
          home.
        </p>
        <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
          With a passion for precision and an eye for detail, Yan specializes in
          transforming spaces through expert tile setting.
        </p>
        </div>
      </section>

      <section className="min-h-[250px] bg-picton-blue-400">
        <div className="">
        <h2 className="text-3xl font-semi-bold text-center lg:text-6xl lg:text-left text-picton-blue-100">Yan&apos;s Journey Heading: From Ukraine to the USA: Yan&apos;s Story</h2>
        <p className="max-w-md mx-auto text-sm text-center mb-4 text-white lg:text-lg lg:text-left lg:mt-0 lg:mx-0">
          Yan&apos;s journey began 15 years ago when he made the bold decision to
          relocate to the United States in pursuit of new opportunities.
        </p>
        <p className="max-w-md mx-auto text-sm text-center mb-4 text-white lg:text-lg lg:text-left lg:mt-0 lg:mx-0">
          His time in New York City served as a crucible for honing his craft,
          where he immersed himself in the demanding world of construction work.
        </p>
        <p className="max-w-md mx-auto text-sm text-center mb-4 text-white lg:text-lg lg:text-left lg:mt-0 lg:mx-0">
          In Las Vegas, Yan continues to build on his legacy of excellence,
          bringing a unique blend of international flair and American ingenuity
          to his tile setting projects.
        </p>
        </div>
      </section>

      <section className="min-w-full min-h-screen ">
        <div className="">
        <h2 className="text-3xl font-semi-bold text-center lg:text-6xl lg:text-left text-picton-blue-500">
          Craftsmanship and Expertise Heading: The Art of Tile Setting: Yan&apos;s
          Approach
        </h2>
        <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
          With over two decades of hands-on experience, Yan has mastered the art
          of tile setting, combining traditional techniques with modern
          innovations.
        </p>
        <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
          From intricate mosaic patterns to sleek, contemporary designs, Yan&apos;s
          portfolio showcases his versatility and commitment to craftsmanship.
        </p>
        <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
          Whether it&apos;s a residential renovation or a commercial installation,
          Yan approaches each project with meticulous attention to detail and a
          dedication to exceeding client expectations.
        </p>
        </div>
        
      </section>

      <section className="min-h-[250px] bg-slate-100">
        <div className="">
        <h2 className="text-3xl font-semi-bold text-center lg:text-6xl lg:text-left text-picton-blue-500">Client Testimonials Heading: What Our Clients Say About Yan</h2>
        <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
        &ldquo;Yan&apos;s professionalism and expertise made our tile renovation project
          a breeze. We couldn&apos;t be happier with the results!&rdquo; - Sarah, Las Vegas&apos;
        </p>
        <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
        &ldquo;From start to finish, Yan demonstrated a level of skill and precision
          that is truly unmatched. I highly recommend him for any tile setting
          project.&rdquo; - Michael, New York City
        </p>
        <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
          Join the ranks of our satisfied clients and experience the difference
          with Yan&apos;s expert tile setting services. Contact us today to discuss
          your project needs and schedule a consultation.
        </p>
        </div>
      </section>

      <section className="min-w-full min-h-screen bg-picton-blue-300">
        <div className="">
          <h3 className="text-3xl font-semi-bold text-center lg:text-6xl lg:text-left text-picton-blue-50">Call to Action:</h3>
        <button className="bg-picton-blue-400 text-white px-4 py-4 rounded shadow-md border border-picton-blue-500 md:text-base hover:bg-white hover:text-picton-blue-300">Contact Yan Today</button>
        <p className="max-w-md mx-auto text-sm text-center mb-4 text-white lg:text-lg lg:text-left lg:mt-0 lg:mx-0">
          Ready to elevate your space with expert tile setting? Don&apos;t hesitate
          to reach out to Yan to discuss your project requirements. Whether
          you&apos;re planning a renovation or starting from scratch, Yan is here to
          bring your vision to life. Get in touch now to schedule your
          consultation.
        </p>
        </div>
        
      </section>
    </main>
  );
}

export default AboutUs;
