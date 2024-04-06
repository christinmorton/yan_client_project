import Link from "next/link";
import Image from "next/image";

import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";

function Socials() {
  return (
    <main className="min-w-full">
      <div className="min-w-full min-h-screen grid grid-cols-4 bg-slate-100">
        <h1>Socials</h1>

        <div>
          <Link
            href="https://www.facebook.com/yan.tilesetter"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook size={128}/>
            {/* <Image
              src="https://img.icons8.com/color/48/000000/facebook.png"
              alt="facebook"
            /> */}
          </Link>
          <Link
            href="https://www.instagram.com/yan.tilesetter/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={128}/>
            {/* <Image
              src="https://img.icons8.com/color/48/000000/instagram-new.png"
              alt="instagram"
            /> */}
          </Link>
          <Link
            href="https://www.linkedin.com/in/yan-tilesetter-0b2b1b1b6/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={128}/> 
            {/* <Image
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt="linkedin"
            /> */}
          </Link>
        </div>
      </div>

      <section>
        <h3>Show the modal!</h3>
        <p>here is a test area to show the modal correctly to the user...</p>
        <Link href="?modal=true">Show me</Link>
      </section>
    </main>
  );
}

export default Socials;
