import Link from "next/link";
import React from "react";

function FooterNavigation() {
  return (
      <>
        <div className="h-10 group">    
        </div>
        <div className="h-10 group">
          <Link href="/faqs">FAQs</Link>
          <div className="mx-2 group-hover:border-b"></div>

        </div>
        <div className="h-10 group">
          <Link href="/">Privacy Policy</Link>
          <div className="mx-2 group-hover:border-b"></div>
        </div>
        <div className="h-10 group">
          <Link href="/">Terms of Service</Link>
          <div className="mx-2 group-hover:border-b"></div>
        </div>
        <div className="h-10 group">
          <Link href="/contact-us" className="tracking-widest">Contact Us</Link>
          <div className="mx-2 group-hover:border-b"></div>
        </div>
      </>
  );
}

export default FooterNavigation;
