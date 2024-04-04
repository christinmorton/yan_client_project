import Link from "next/link";
import Image from "next/image";
import FooterNavigation from "./navigation/FooterNavigation";

import logoTextMark from '../public/images/yans_logo/Yans_Tiles_Logo_word_mark_black.png';

import React from 'react'


function Footer() {
  return (
    <footer className="min-w-full bg-picton-blue-500">
          <Link href="/">
            {/* <span>Yan | Tile Setter</span> */}
            <Image src={logoTextMark} alt="logo mark of Yan's Tiles" id="logo" className="logo w-36 h-28" />
          </Link>
        <FooterNavigation />
        <p className=" text-white text-center my-auto">&copy; 2024, All rights reserved</p>
    </footer>
  )
}

export default Footer