import Link from "next/link";
import Image from "next/image";
import FooterNavigation from "./navigation/FooterNavigation";

import { Linkedin, Facebook, Twitter } from 'lucide-react';

import logoTextMark from '../public/images/yans_logo/Yans_Tiles_Logo_word_mark_black.png';

import React from 'react'


function Footer() {
  return (
    <footer className="min-h-[250px] bg-picton-blue-500">
        <div className="px-44 py-12 mx-auto0">
          <div className="flex flex-col items-center mb-8 space-y-6 lg:flex-row lg:space-y-0 lg:justify-between lg:items-start">
            {/* Menu and logo container */}
            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              <Link href="/" className="inline-block">
                {/* <span>Yan | Tile Setter</span> */}
                <Image src={logoTextMark} alt="logo mark of Yan's Tiles" id="logo" className="logo w-44 h-28 md:ml-3" />
              </Link>

              <div className="flex flex-col items-center space-y-4 text-white font-bold md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                <FooterNavigation />
              </div>
            </div>

            {/* social and copy container */}
            <div className="min-h-[168px] flex flex-col items-start justify-between space-y-4 pt-12 lg:pt-0 text-gray-500">
              <div className="self-center flex items-center justify-center space-x-4 lg:self-start lg:mx-0">
                <Link href="#">
                  <span className="text-2xl text-white">
                    <Linkedin className="h-6" />
                  </span>
                </Link>
                <Link href="#">
                  <span className="text-2xl text-white">
                    <Facebook className="h-6" />
                  </span>
                </Link>
                <Link href="#">
                  <span className="text-2xl text-white">
                    <Twitter className="h-6" />
                  </span>
                </Link>
              </div>

              <div className="min-h-[16px] flex flex-col items-center justify-between font-bold lg:justify-normal">
                <p className=" text-white text-center  mt-12 lg:mt-auto ">Copyright &copy; <Link href="#" className="font-serif font-semibold">Yan's Tiles</Link>, 2024, All rights reserved</p>

                <Link href="#" className="mt-12 lg:mt-0">
                  {/* <span>Yan | Tile Setter</span> */}
                  <p className="text-white">Design by Christin Morton</p>
                </Link>
              </div>
            </div>
          
          </div>

          
          
        </div>
    </footer>
  )
}

export default Footer