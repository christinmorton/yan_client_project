'use client';

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { MenuSquare } from "lucide-react";

// import yanProfilePic from "../public/images/Resized_Resized_20220817_124533_223826879431907.JPEG";
import logoTextMark from '../../public/images/yans_logo/Yans_Tiles_Logo_word_mark_black.png';

function MainNavigation() {

  const onToggleMenu = (e) => () => {
    console.log('clicked')
  }

  return (
    <header>
      <nav className="flex items-center justify-between space-x-20 m-6">
        <div className="z-30">
          <Link href="/">
            {/* <span>Yan | Tile Setter</span> */}
            <Image src={logoTextMark} alt="logo mark of Yan's Tiles" id="logo" className="logo w-36 h-28" />
          </Link>
        </div>

        {/* Menu Items */}
        <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
          <Link href="/services/tile-setter"><span className="tracking-widest hover:text-picton-blue-400"> Services</span></Link>
          <Link href="/projects" className="tracking-widest hover:text-picton-blue-400">Projects</Link>
          <Link href="/about-us" className="tracking-widest hover:text-picton-blue-400">About</Link>
          <button className="px-8 py-2 text-white bg-picton-blue-400 border-2 border-picton-blue-300 rounded-lg shadow-md hover:text-picton-blue-300 hover:bg-white">Contact</button>
          {/* <Link href="/contact-us" className="tracking-widest hover:text-softRed">Contact Us</Link> */}
        </div>



        

        {/* <div className="flex items-center gap-6">
          <Button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Get a Quote</Button>
          <MenuSquare onClick={(e) => onToggleMenu(e)} className="text-3xl cursor-pointer md:hidden" />
        </div> */}
      </nav>
    </header>
  );
}

export default MainNavigation;
