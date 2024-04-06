import Image from "next/image";

import projectPic1 from "../../public/images/Resized_Resized_20231109_125211_223389226286137.JPEG";
import projectPic2 from "../../public/images/Resized_Resized_20230815_102145_223622606178443.JPEG";
import projectPic3 from "../../public/images/stock/charlesdeluvio-zy0s5QJZTYo-unsplash.jpg";
import projectPic4 from "../../public/images/stock/pexels-jean-van-der-meulen-1457847.jpg";
import projectPic5 from "../../public/images/Resized_Resized_20231204_161849_223463781147931.JPEG";
import projectPic6 from '../../public/images/Resized_Resized_20240306_165443.JPEG'

function Projects() {
  return (
    <main className="min-w-full">
      <section className="min-w-full min-h-screen  bg-slate-100">
        <div className="">
          <h1 className="text-3xl font-semi-bold text-center lg:text-6xl lg:text-left text-picton-blue-500">🏗️ Transforming Spaces with Expert Tile Setting Services</h1>
          <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
            Are you looking to elevate the aesthetic appeal of your home or
            workspace? Meet Yan, your trusted partner in crafting stunning tile
            designs that breathe new life into any environment. With over two
            decades of hands-on experience in construction work, Yan brings a
            wealth of expertise to every project he undertakes.
          </p>
          <p className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
            Originally from Ukraine, Yan&apos;s journey in the United States has been
            nothing short of remarkable. After honing his skills in the bustling
            streets of New York City for 11 years, he now calls the vibrant city
            of Las Vegas his home.
          </p>
        </div>
      </section>


      <section className="min-h-[250px] flex flex-col-reverse items-center justify-center bg-picton-blue-400 lg:flex-row  p-16">
        <div className="w-1/2 flex m-8 items-center justify-end ">
          <Image
            className=""
            src={projectPic1}
            alt="A stunning tiled space showcasing Yan's work"
            width={400}
            height={400}
          />
        </div>
        <div className="w-1/2 flex flex-col justify-between gap-4 text-left m-8 border-t-2 border-picton-blue-50">
          {/* <h2 className="">About Yan</h2> */}
          <h3 className="text-3xl font-semi-bold text-center lg:text-6xl lg:text-left text-picton-blue-100">
            Project 1: 
          </h3>
          <h4 className="text-lg font-semi-bold text-center lg:text-xl lg:text-left text-picton-blue-200">
            Luxury Bar & Lounge Renvoation
          </h4>
          <p className="max-w-md mx-auto text-sm text-center text-white lg:text-lg lg:text-left lg:mt-0 lg:mx-0">
            With over 20 years of experience in the construction industry, Yan
            has perfected the art of tile setting. Yan is passionate about
            delivering exceptional results that exceed expectations.
          </p>
        </div>
      </section>

      <section className="min-h-[250px] flex flex-col-reverse items-center justify-center bg-picton-blue-400 lg:flex-row  p-16">
        <div className="w-1/2 flex flex-col justify-between gap-4  m-8 border-t-2 border-picton-blue-50">
          {/* <h2 className="">About Yan</h2> */}
          <h3 className="text-3xl font-semi-bold text-center lg:text-6xl lg:text-right text-picton-blue-100">
            Project 2: 
          </h3>
          <h4 className="text-lg font-semi-bold text-center lg:text-xl lg:text-right text-picton-blue-200">
            Commercial Court Tiling Construction
          </h4>
          <p className="max-w-md text-sm text-center text-white lg:text-lg md:text-right lg:mt-0 lg:self-end">
            With over 20 years of experience in the construction industry, Yan
            has perfected the art of tile setting. Yan is passionate about
            delivering exceptional results that exceed expectations.
          </p>
        </div>
        <div className="w-1/2 flex m-8 items-center justify-start ">
          <Image
            className=""
            src={projectPic2}
            alt="A stunning tiled space showcasing Yan's work"
            width={400}
            height={400}
          />
        </div>
      </section>

      <section className="min-h-[250px] flex flex-col-reverse items-center justify-center bg-picton-blue-400 lg:flex-row  p-16">
        <div className="w-1/2 flex m-8 items-center justify-end ">
          <Image
            className=""
            src={projectPic5}
            alt="A stunning tiled space showcasing Yan's work"
            width={400}
            height={400}
          />
        </div>
        <div className="w-1/2 flex flex-col justify-between gap-4 text-left m-8 border-t-2 border-picton-blue-50">
          {/* <h2 className="">About Yan</h2> */}
          <h3 className="text-3xl font-semi-bold text-center lg:text-6xl lg:text-left text-picton-blue-100">
            Project 3:
          </h3>
          <h4 className="text-lg font-semi-bold text-center lg:text-xl lg:text-left text-picton-blue-200">
            Residential Bathroom Renovation
          </h4>
          <p className="max-w-md mx-auto text-sm text-center text-white lg:text-lg lg:text-left lg:mt-0 lg:mx-0">
            With over 20 years of experience in the construction industry, Yan
            has perfected the art of tile setting. Yan is passionate about
            delivering exceptional results that exceed expectations.
          </p>
        </div>
      </section>
      
    </main>
  );
}

export default Projects;
