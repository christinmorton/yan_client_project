import Image from "next/image";

import HomepageContactForm from "@/components/forms/HomepageContactForm";
import Carousel from "@/components/Carousel";
import Slider from "@/components/Slider";
import Map from "@/components/Map";

import yanProfilePic from "../public/images/Resized_Resized_20220817_124533_223826879431907.JPEG";
import projectPic1 from "../public/images/Resized_Resized_20231109_125211_223389226286137.JPEG";
import projectPic2 from "../public/images/Resized_Resized_20230815_102145_223622606178443.JPEG";
import projectPic3 from "../public/images/stock/charlesdeluvio-zy0s5QJZTYo-unsplash.jpg";
import projectPic4 from "../public/images/stock/pexels-jean-van-der-meulen-1457847.jpg";
import projectPic5 from "../public/images/Resized_Resized_20231204_161849_223463781147931.JPEG";
import projectPic6 from '../public/images/Resized_Resized_20240306_165443.JPEG'
import headerPic from "../public/images/stock/pexels-luis-yanez-206172.jpg";
import bathroom from "../public/images/svg_assets/bathroom-svgrepo-com.png";
import kitchen from "../public/images/svg_assets/kitchen-room-svgrepo-com.png";
import residential from "../public/images/svg_assets/house-svgrepo-com.png";
import commerical from "../public/images/svg_assets/residential-svgrepo-com.png";

import { Car, CircleUserRound } from "lucide-react";

import { getTestimonials, getSliderImages } from "@/lib/utils";

export default function Home() {
  const testimonials = getTestimonials();

  return (
    <main className="min-w-full">
      <section id="hero">
        <div className="container flex flex-col-reverse gap-x-6 mx-auto p-6 lg:flex-row lg:mb-0">
          {/* Content */}
          <div className="flex flex-col space-y-10 mt-12 lg:mt-16 lg:w-1/2">
            <h1 className="text-3xl font-semi-bold text-center lg:text-6xl lg:text-left text-picton-blue-500">
              Welcome to <br className="hidden lg:visible" /> Yan&apos;s Tiles
            </h1>
            <h2 className="max-w-md mx-auto text-sm text-center text-gray-400 lg:text-md lg:text-left lg:mt-0 lg:mx-0">
              Elevate Your Space with Expert Tile Setting
            </h2>
            <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
              Transforming homes and businesses with exquisite Craftsmanship
            </p>

            <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
              <button className="bg-picton-blue-400 text-white px-4 py-4 rounded shadow-md border border-picton-blue-500 md:text-base hover:bg-white hover:text-picton-blue-300">
                Get a Free Quote
              </button>
            </div>
          </div>

          <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
            <div className="bg-hero"></div>
            <Image
              src={headerPic}
              alt="A stunning tiled space showcasing Yan's work"
              className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
            />
          </div>
        </div>

        <div className="col-start-2 col-end-4 justify-baseline my-auto min-h-48 text-white"></div>
      </section>

      <section className="min-h-[250px] flex flex-col-reverse items-center justify-center bg-picton-blue-400 lg:flex-row  p-16">
        <div className="w-1/2 flex m-8 items-center justify-end ">
          <Image
            className=""
            src={yanProfilePic}
            alt="A stunning tiled space showcasing Yan's work"
            width={400}
            height={400}
          />
        </div>
        <div className="w-1/2 flex flex-col justify-between gap-4 text-left m-8">
          {/* <h2 className="">About Yan</h2> */}
          <h3 className="text-3xl font-semi-bold text-center lg:text-6xl lg:text-left text-picton-blue-100">
            Meet Yan:
          </h3>
          <h4 className="text-lg font-semi-bold text-center lg:text-xl lg:text-left text-picton-blue-200">
            Your Trusted Tile Setting Specialist
          </h4>
          <p className="max-w-md mx-auto text-sm text-center text-white lg:text-lg lg:text-left lg:mt-0 lg:mx-0">
            With over 20 years of experience in the construction industry, Yan
            has perfected the art of tile setting. Yan is passionate about
            delivering exceptional results that exceed expectations.
          </p>
        </div>
      </section>

      <section className="min-w-full min-h-screen p-16 bg-slate-100 ">
        {/* section title */}
        <div className="flex flex-row items-center justify-center lg:hidden lg:justify-end pt-4">
          <h2 className="text-3xl font-semi-bold text-center block lg:hidden lg:text-6xl lg:text-right lg:mr-28 text-picton-blue-500">
            Our Services
          </h2>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row ">
          <div className="w-full min-h-[300px] flex flex-col items-center justify-evenly lg:flex-row gap-4">
            <div className="flex flex-wrap items-center justify-center gap-0 p-24 lg:gap-4 lg:flex-col lg:justify-evenly">
              <div className="card relative group w-[50%] lg:w-auto lg:flex-1">
                <Image
                  src={bathroom}
                  alt="bathroom tile icon"
                  className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-picton-blue-400 opacity-100 bg-opacity-80">
                  <div className="flex justify-between w-full">
                    <div className="font-normal">
                      <p className="text-sm">Bathroom Tile</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card relative group w-[50%] lg:w-auto lg:flex-1">
                <Image
                  src={kitchen}
                  alt="kitchen tile icon"
                  className="w-[200px] h-[200px]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-picton-blue-400 opacity-100 bg-opacity-80">
                  <div className="flex justify-between w-full">
                    <div className="font-normal">
                      <p className="text-sm">Kitchen Tile</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card relative group w-[50%] lg:w-auto lg:flex-1">
                <Image
                  src={residential}
                  alt="residential tile icon"
                  className="w-[200px] h-[200px]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-picton-blue-400 opacity-100 bg-opacity-80">
                  <div className="flex justify-between w-full">
                    <div className="font-normal">
                      <p className="text-sm">Residential</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card relative group w-[50%] lg:w-auto lg:flex-1">
                <Image
                  src={commerical}
                  alt="commercial tile icon"
                  className="w-[200px] h-[200px]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-picton-blue-400 opacity-100 bg-opacity-80">
                  <div className="flex justify-between w-full">
                    <div className="font-normal">
                      <p className="text-sm">Commercial</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center lg:items-end justify-center my-8 mr-28 gap-y-4">
            <h2 className="text-3xl font-semi-bold text-right hidden lg:block lg:text-6xl text-picton-blue-500">
              Our Services
            </h2>
            <h2 className="text-lg font-semi-bold text-center lg:text-xl lg:text-right text-picton-blue-500">
              Expert Tile Setting Services
            </h2>
            <h4 className="text-md font-extralight text-right lg:text-lg lg:text-right text-grayishBlue">Tailored to Your Needs</h4>
            <p className="max-w-md mx-auto text-sm text-center text-picton-blue-500 mb-12 lg:text-md lg:text-right lg:mt-0 lg:mx-0">
              From residential renovations to commercial installations, Yan offers a comprehensive range of tile setting services to suit every project requirement. Whether you&apos;re looking to refresh your kitchen backsplash, upgrade your bathroom flooring, or create a striking feature wall. Yan combines precision, creativity, and attention to detail to bring your vision to life. Contact us today to explore our full range of services.
            </p>
          </div>
        </div>

      </section>

      <section className="min-h-[250px] flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-y-12 p-44 bg-picton-blue-400 ">
        <div className="lg:row-start-1 lg:row-end-1 lg:col-start-1 lg:col-end-3 lg:place-content-end">
            <h2 className="text-3xl font-semi-bold text-center lg:text-6xl lg:text-left text-picton-blue-100">
              Portfolio
            </h2>
        </div>

        <div className="lg:row-start-2 lg:col-start-1 lg:col-end-3">
          <h2 className="text-lg font-semi-bold text-center  mb-2 lg:text-xl lg:text-left text-picton-blue-200">Explore Our Portfolio </h2>
          <p className="max-w-md mx-auto text-sm text-center mb-4 text-white lg:text-lg lg:text-left lg:mt-0 lg:mx-0">
            Take a virtual tour of some of our recent tile setting projects
            and gain inspiration for your own space. From classic designs to
            contemporary concepts, our portfolio showcases the versatility and
            quality of our workmanship. Browse through our gallery and
            envision the possibilities for transforming your home or business
            with Yan&apos;s expert tile setting services.
          </p>
        </div>

        <div className="lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:col-end-5">
          <div className="w-full h-full flex flex-col lg:flex-row">
            <div className="col-start-1 col-end-2 row-start-2 w-full">
                <Carousel>
                  {[
                    projectPic1,
                    projectPic2,
                    projectPic4,
                    projectPic5,
                    projectPic6,
                  ].map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt="A stunning tiled space showcasing Yan's work"
                      // width={400}
                      // height={400}
                    />
                  ))}
                </Carousel>
            </div>
          </div>
        </div>
      
      </section>

      <section className="min-w-full flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-y-12 p-24 bg-slate-100">
        <div className="row-start-1 row-end-2 col-start-1 col-end-4 p-12">
          <h2 className="text-3xl font-semi-bold text-center lg:text-6xl lg:text-left text-picton-blue-500">
            Testimonials
          </h2>
          <h2 className="text-lg font-semi-bold text-center  mb-2 lg:text-xl lg:text-left text-gray-400">Hear From Our Satisfied Clients </h2>
          <div>
            <p className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-picton-blue-500 mb-4">
              Don&apos;t just take our word for it—discover what our satisfied
              clients have to say about their experience working with Yan. From
              prompt communication to flawless execution, our dedication to
              customer satisfaction shines through in every testimonial. Read
              firsthand accounts of our exceptional service and craftsmanship
              and join the ranks of our delighted customers.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-5 mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
            <div className="bg-hero"></div>
            <Slider> 
            {testimonials.map((testimonial) => (
                <div key={testimonial.id} className=' bg-white '>
                    <Image
                      src={`/images/profile_pics/${testimonial.image}`}
                      alt={`A photo of ${testimonial.first_name} ${testimonial.last_name}, a satisfied customer!`}
                      
                      className="rounded-full mx-auto"
                      loading="lazy"
                      width={100}
                      height={100}
                    />
                    {/* <CircleUserRound /> */}
                    <h4>
                      {testimonial.first_name} {testimonial.last_name}
                    </h4>
                    <h4>{testimonial.services_used}</h4>
      
                    <p>{testimonial.testimonial}</p>
                  </div>
              ))}
            </Slider>
        </div>

        {/* <div className="gap-6"></div> */}
      </section>

      <section className="min-h-[250px] px-24 pt-24 lg:px-44 lg:pt-44 bg-picton-blue-300">
        <div className="p-12 bg-white rounded-t-2xl">
          <h2 className="text-3xl font-semi-bold text-center lg:text-6xl lg:text-left text-picton-blue-500">
            Contact Us
          </h2>
          {/* <h3 className="text-lg font-semi-bold text-center  mb-2 lg:text-xl lg:text-left text-gray-600">Get in Touch </h3> */}
          <p className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-picton-blue-500 mb-4">
            Ready to transform your space with expert tile setting? Reach out to
            Yan today to discuss your project requirements and schedule a
            consultation. Whether you have questions about our services or are
            ready to get started, we&apos;re here to help. Fill out the form below,
            and one of our team members will be in touch with you shortly.
          </p>
        </div>

        <div className=" w-full p-6 bg-picton-blue-400">
          <HomepageContactForm />
        </div>

        <div className="w-full flex flex-col items-center justify-between gap-x-8 pt-12 px-8 pb-12 bg-white lg:flex-row">
        <div className="space-y-4 p-4">
          <h2 className="text-3xl font-semi-bold text-center lg:text-6xl lg:text-left text-picton-blue-500">Contact Info</h2>
          <h4 className="text-lg font-extralight text-center lg:text-xl lg:text-left text-gray-400">Phone: <tel>18001234567</tel> </h4>
          <h4 className="text-lg font-extralight text-center lg:text-xl lg:text-left text-gray-400">Email: <span>yanbky@gmail.com</span></h4>
          <p className="text-base text-center sm:text-sm md:text-base md:text-left lg:text-md xl:text-lg 2xl:text-xl text-picton-blue-500 mb-4">Get in contact with me at anytime. I serve the city of Las Vegas with the highest quality of Tile Setting Services</p>
        </div>
        <div className="w-full">
          <Map address="Las Vegas, NV" />
        </div>
        </div>
      </section>
    </main>
  );
}
