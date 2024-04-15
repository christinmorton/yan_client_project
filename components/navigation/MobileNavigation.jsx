'use client';

import Link from "next/link";
import { useState } from "react";

const MobileNavigation = ({open}) => {


  return (
    <div className={`${open ? 'hidden' : ''} flex md:hidden bg-picton-blue-100 py-6`}>
        <nav className="flex flex-col space-y-4 px-10 pb-3 pt-2">
            <Link href="/services/tile-setter"><span className="tracking-widest hover:text-picton-blue-400"> Services</span></Link>
            <Link href="/projects" className="tracking-widest hover:text-picton-blue-400">Projects</Link>
            <button className="px-8 py-2 text-white bg-picton-blue-400 border-2 border-picton-blue-300 rounded-lg shadow-md hover:text-picton-blue-300 hover:bg-white">Contact</button>
            {/* <Link href="/contact-us" className="tracking-widest hover:text-softRed">Contact Us</Link> */}
    </nav>
    </div>    
  )
}

export default MobileNavigation