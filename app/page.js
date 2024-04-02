import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import HomepageContactForm from "@/components/forms/HomepageContactForm";

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

import { CircleUserRound } from "lucide-react";

import { getTestimonials } from "@/lib/utils";

export default function Home() {
  const testimonials = getTestimonials();

  return (
    <main className="min-w-full">
      <section id="hero">
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
          {/* Content */}
          <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
            <h1 className="text-3xl font-semi-bold text-center lg:text-6xl lg:text-left text-picton-blue-600">
              Welcome to <br className="hidden lg:visible" /> Yan's Tiles
            </h1>
            <h2 className="max-w-md mx-auto text-sm text-center text-gray-400 lg:text-md lg:text-left lg:mt-0 lg:mx-0">
              Elevate Your Space with Expert Tile Setting
            </h2>
            <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
              Transforming Homes and Businesses with Exquisite Craftsmanship{" "}
            </p>

            <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
              <button className="bg-picton-blue-400 text-white px-4 py-4 rounded shadow-md border border-picton-blue-400 md:text-base hover:bg-white hover:text-picton-blue-300">
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

      <section className="min-h-[250px] flex flex-col-reverse items-center justify-center bg-picton-blue-400 lg:flex-row">
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

      <section className="min-w-full min-h-screen py-6 bg-slate-100 ">
        {/* section title */}
        <div className="flex flex-row items-center justify-center lg:justify-end pt-4">
          <h2 className="text-3xl font-semi-bold text-center lg:text-6xl lg:text-right lg:mr-28 text-picton-blue-600">
            Our Services
          </h2>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="w-full min-h-[300px] flex flex-col items-center justify-evenly lg:flex-row gap-4">
            <div className="flex flex-wrap items-center justify-center lg:flex-col lg:justify-evenly">
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
            <h2 className="text-lg font-semi-bold text-center lg:text-xl lg:text-right text-grayishBlue">
              Expert Tile Setting Services
            </h2>
            <h4 className="text-md font-extralight text-right lg:text-lg lg:text-right text-grayishBlue">Tailored to Your Needs</h4>
            <p className="max-w-md mx-auto text-sm text-right text-picton-blue-600 mb-12 lg:text-md lg:mt-0 lg:mx-0">
              From residential renovations to commercial installations, Yan offers a comprehensive range of tile setting services to suit every project requirement. Whether you're looking to refresh your kitchen backsplash, upgrade your bathroom flooring, or create a striking feature wall. Yan combines precision, creativity, and attention to detail to bring your vision to life. Contact us today to explore our full range of services.
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
            with Yan's expert tile setting services.
          </p>
        </div>

        <div className="lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:col-end-5">
          <div className="w-full h-full flex flex-col lg:flex-row">
            <div className="col-start-1 col-end-2 row-start-2">
              <Image
                src={projectPic1}
                alt="A stunning tiled space showcasing Yan's work"
                // width={400}
                // height={400}
              />
            </div>

            <div className="col-start-2 col-end-4 row-start-2">
              <Image
                src={projectPic2}
                alt="A stunning tiled space showcasing Yan's work"
                // width={400}
                // height={600}
              />
            </div>

            <div className="col-start-4 col-end-5 row-start-2">
              <Image
                src={projectPic4}
                alt="A stunning tiled space showcasing Yan's work"
                // width={400}
                // height={400}
              />
            </div>
            <div className="col-start-4 col-end-5 row-start-2">
              <Image
                src={projectPic5}
                alt="A stunning tiled space showcasing Yan's work"
                // width={400}
                // height={400}
              />
            </div>
            <div className="col-start-4 col-end-5 row-start-2">
              <Image
                src={projectPic6}
                alt="A stunning tiled space showcasing Yan's work"
                // width={400}
                // height={400}
              />
            </div>
          </div>
        </div>
      
      </section>

      <section className="min-w-full  bg-slate-100">
        <div className="p-12">
          <h2 className="text-3xl font-semi-bold text-center lg:text-6xl lg:text-left text-picton-blue-600">
            Testimonials
          </h2>
          <h2>Hear From Our Satisfied Clients </h2>
          <div>
            <p className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-800 mb-4">
              Don't just take our word for it—discover what our satisfied
              clients have to say about their experience working with Yan. From
              prompt communication to flawless execution, our dedication to
              customer satisfaction shines through in every testimonial. Read
              firsthand accounts of our exceptional service and craftsmanship
              and join the ranks of our delighted customers.
            </p>
          </div>
        </div>

        <div className="gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardHeader>
                {/* <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                /> */}
                <CircleUserRound />
                <CardTitle>
                  {testimonial.first_name} {testimonial.last_name}
                </CardTitle>
                <h4>{testimonial.services_used}</h4>
              </CardHeader>
              <CardContent>
                <CardDescription>{testimonial.testimonial}</CardDescription>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <div className="min-h-[250px] m-44 ">
        <div className="p-6">
          <h2 className="text-3xl font-semi-bold text-center lg:text-6xl lg:text-left text-picton-blue-600">
            Contact Us
          </h2>
          <h3>Get in Touch </h3>
          <p className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-800 mb-4">
            Ready to transform your space with expert tile setting? Reach out to
            Yan today to discuss your project requirements and schedule a
            consultation. Whether you have questions about our services or are
            ready to get started, we're here to help. Fill out the form below,
            and one of our team members will be in touch with you shortly.
          </p>
        </div>

        <div className=" w-full p-6 bg-slate-600">
          <HomepageContactForm />
        </div>
      </div>
    </main>
  );
}
