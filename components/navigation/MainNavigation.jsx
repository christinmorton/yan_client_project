'use client';

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { MenuSquare } from "lucide-react";

function MainNavigation() {

  const onToggleMenu = (e) => () => {
    console.log('clicked')
  }

  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className="">
          <Link href="/">
            <span>Yan | Tile Setter</span>
          </Link>
        </div>
        <div className="md:static md:min-h-fit absolute bg-white min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center">
          <div className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-12">
            <Link href="/services/tile-setter" className="hover:text-gray-500" >Services</Link>
            <Link href="/projects" className="hover:text-gray-500">Projects</Link>
            <Link href="/about-us" className="hover:text-gray-500">About Us</Link>
            <Link href="/contact-us" className="hover:text-gray-500">Contact Us</Link>
          </div>
        </div>

        

        <div className="flex items-center gap-6">
          <Button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Get a Quote</Button>
          <MenuSquare onClick={(e) => onToggleMenu(e)} className="text-3xl cursor-pointer md:hidden" />
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
