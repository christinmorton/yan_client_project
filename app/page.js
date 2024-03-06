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

import yanProfilePic from "../public/images/cropped_profile_yan.png";
import projectPic1 from "../public/images/Resized_Resized_20231109_125211_223389226286137.JPEG";
import projectPic2 from "../public/images/Resized_Resized_20230815_102145_223622606178443.JPEG";
import projectPic3 from "../public/images/stock/charlesdeluvio-zy0s5QJZTYo-unsplash.jpg";
import projectPic4 from "../public/images/stock/pexels-jean-van-der-meulen-1457847.jpg";
import projectPic5 from "../public/images/Resized_Resized_20231204_161849_223463781147931.JPEG";
import headerPic from "../public/images/stock/maksim-shutov-o6VYbMug0JU-unsplash.jpg";

import { CircleUserRound } from "lucide-react";

import { getTestimonials } from "@/lib/utils";

export default function Home() {
  const testimonials = getTestimonials();

  return (
    <main className="min-w-full">
      {/* 
        Welcome to Yan's Tile Setting Services 
        | flex min-h-screen flex-col items-center justify-between p-24
        | sm:grid-cols-2 md:grid-cols-3 gap-2
        | min-h-screen content-center justify-center grid grid-custom gap-6
      */}
      {/*  */}
      <div
        style={{
          backgroundImage: `url('./images/stock/maksim-shutov-o6VYbMug0JU-unsplash.jpg')`,
          // height: "972px",
        }}
        className="min-w-full min-h-screen grid grid-cols-4 bg-slate-100 bg-cover bg-center bg-no-repeat bg-fixed"
      >
        <div className="col-start-2 col-end-4 justify-baseline my-auto min-h-48 text-white">
          <h1>Welcome to Yan's Tile Setting Services</h1>
          <h2>Elevate Your Space with Expert Tile Setting</h2>
          <p>Transforming Homes and Businesses with Exquisite Craftsmanship </p>
          <button>Get a Free Quote</button>
        </div>
      </div>

      <div className="min-h-[250px] m-44 grid grid-cols-4 gap-6">
        <div className="col-start-2 col-end-3">
          <Image
            src={yanProfilePic}
            alt="A stunning tiled space showcasing Yan's work"
            width={400}
            height={400}
          />
        </div>
        <div className="col-start-3 col-end-5 p-5 mx-auto my-auto">
          <h2>About Yan</h2>
          <p>[Image of Yan working on a tile project]</p>

          <h3>Meet Yan: Your Trusted Tile Setting Specialist</h3>
          <p>
            With over 20 years of experience in the construction industry, Yan
            has perfected the art of tile setting. Originally from Ukraine, Yan
            brings a blend of Old World craftsmanship and modern techniques to
            every project. Having honed his skills in New York City for 11 years
            before relocating to the vibrant city of Las Vegas, Yan is
            passionate about delivering exceptional results that exceed
            expectations.
          </p>
        </div>
      </div>

      <div className="min-w-full min-h-screen grid grid-cols-4 bg-slate-100 gap-4">
        <div className="col-start-2 col-end-4 row-start-1 row-end-2 p-6">
          <h2>Our Services</h2>
          <p>[Image collage showcasing various tile setting projects] </p>
          <h2>Expert Tile Setting Services Tailored to Your Needs </h2>
          <p>
            From residential renovations to commercial installations, Yan offers
            a comprehensive range of tile setting services to suit every project
            requirement. Whether you're looking to refresh your kitchen
            backsplash, upgrade your bathroom flooring, or create a striking
            feature wall, Yan combines precision, creativity, and attention to
            detail to bring your vision to life. Contact us today to explore our
            full range of services.
          </p>
        </div>

        {/* <div className="col-start-1 col-end-5 row-start-2 row-end-3"> */}
        <div className="col-start-1 col-end-2 row-start-2">
          <Image
            src={projectPic1}
            alt="A stunning tiled space showcasing Yan's work"
            width={400}
            height={600}
          />
        </div>

        <div className="col-start-2 col-end-4 row-start-2">
          <Image
            src={projectPic2}
            alt="A stunning tiled space showcasing Yan's work"
            
          />
        </div>

        {/* <div className="col-start-3 col-end-4 row-start-2">
          <Image
            src={projectPic3}
            alt="A stunning tiled space showcasing Yan's work"
            width={400}
            height={400}
          />
        </div> */}

        <div className="col-start-4 col-end-5 row-start-2">
          <Image
            src={projectPic4}
            alt="A stunning tiled space showcasing Yan's work"
            width={400}
            height={400}
          />
        </div>
        {/* </div> */}
      </div>

      <div className="min-h-[250px] m-44 grid grid-cols-4 grid-rows-2">
        <div className="row-start-1 col-start-2 col-end-4">
          <div>
            <h2>Portfolio </h2>
            <h2>Explore Our Portfolio </h2>
          </div>
          <div>
            <p>
              Take a virtual tour of some of our recent tile setting projects
              and gain inspiration for your own space. From classic designs to
              contemporary concepts, our portfolio showcases the versatility and
              quality of our workmanship. Browse through our gallery and
              envision the possibilities for transforming your home or business
              with Yan's expert tile setting services.
            </p>
            <p>[Slideshow showcasing Yan's past tile setting projects] </p>
          </div>
        </div>
        <div className="col-start-1 col-end-2 row-start-2">
          <Image
            src={projectPic1}
            alt="A stunning tiled space showcasing Yan's work"
            width={400}
            height={400}
          />
        </div>
        <div className="col-start-2 col-end-4 row-start-2 mx-auto my-auto">
          <Image
            src={projectPic2}
            alt="A stunning tiled space showcasing Yan's work"
            width={400}
            height={400}
          />
        </div>
        <div className="col-start-4 col-end-5 row-start-2">
          <Image
            src={projectPic5}
            alt="A stunning tiled space showcasing Yan's work"
            width={400}
            height={400}
          />
        </div>
      </div>

      <div className="min-w-full grid grid-cols-7 grid-rows-auto bg-slate-100">
        <div className="row-start-1 col-start-3 col-end-6 p-12">
          <h2>Testimonials</h2>
          <h2>Hear From Our Satisfied Clients </h2>
          <div>
            <p>
              Don't just take our word for it—discover what our satisfied
              clients have to say about their experience working with Yan. From
              prompt communication to flawless execution, our dedication to
              customer satisfaction shines through in every testimonial. Read
              firsthand accounts of our exceptional service and craftsmanship
              and join the ranks of our delighted customers.
            </p>
            <p>[Carousel of customer testimonials with accompanying images] </p>
          </div>
        </div>

        <div className="row-start-2 col-start-2 col-end-7 grid grid-cols-5 grid-rows-auto gap-6">
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
      </div>

      <div className="min-h-[250px] m-44 grid grid-cols-4 grid-rows-auto justify-items-center">
        <div className="row-start-1 col-start-2 col-end-4 p-6">
          <h2>Contact Us</h2>
          <h3>Get in Touch </h3>
          <p>
            Ready to transform your space with expert tile setting? Reach out to
            Yan today to discuss your project requirements and schedule a
            consultation. Whether you have questions about our services or are
            ready to get started, we're here to help. Fill out the form below,
            and one of our team members will be in touch with you shortly.
          </p>
        </div>

        <div className=" w-full row-start-2 col-start-2 col-end-4 p-6 bg-slate-600">
          <HomepageContactForm />
        </div>
      </div>
    </main>
  );
}
