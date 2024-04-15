'use client';

import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import { IoMenu } from "react-icons/io5";
import { FaRegTimesCircle } from "react-icons/fa";



// import yanProfilePic from "../public/images/Resized_Resized_20220817_124533_223826879431907.JPEG";
import logoTextMark from '../../public/images/yans_logo/yans_logo_2.svg';
import MobileNavigation from "./MobileNavigation";

function MainNavigation() {
  const [menuOpen, setMenuOpen] = useState(true);

  const onToggleMenu = (e) => () => {
    if(menuOpen) {
      setMenuOpen(false);
      return;
    } else {
      setMenuOpen(true);
    }
  }

  return (
    <header>
      <nav className="flex items-center justify-between space-x-20 m-6">
        <div className="z-30">
          <Link href="/">
            {/* <span>Yan | Tile Setter</span> */}
            <Image src={logoTextMark} alt="logo mark of Yan's Tiles" id="logo" className="logo w-56 h-56" />
          </Link>
        </div>

        {/* Menu Items */}
        <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
          <Link href="/services/tile-setter"><span className="tracking-widest hover:text-picton-blue-400"> Services</span></Link>
          <Link href="/projects" className="tracking-widest hover:text-picton-blue-400">Projects</Link>
          <button className="px-8 py-2 text-white bg-picton-blue-400 border-2 border-picton-blue-300 rounded-lg shadow-md hover:text-picton-blue-300 hover:bg-white">Contact</button>
          {/* <Link href="/contact-us" className="tracking-widest hover:text-softRed">Contact Us</Link> */}
        </div>


        <div className="flex flex-row justify-between md:hidden">
          {menuOpen ? 
            (
              <button id="menu-btn" onClick={onToggleMenu()} className="z-30 block px-4 md:hidden focus:outline-none">
                <IoMenu size={36} className="text-picton-blue-500 border-2 border-picton-blue-500 rounded-lg" />
              </button>
            ) : (
              <button id="menu-btn" onClick={onToggleMenu()} className="z-30 block px-4 md:hidden focus:outline-none">
                <FaRegTimesCircle size={36} className="text-picton-blue-500" />
              </button>
            )}
        </div>
        

        {/* <div className="flex items-center gap-6">
          <Button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Get a Quote</Button>
          <MenuSquare onClick={(e) => onToggleMenu(e)} className="text-3xl cursor-pointer md:hidden" />
        </div> */}
      </nav>
      <MobileNavigation open={menuOpen} />
    </header>
  );
}

export default MainNavigation;
