import Link from "next/link";
import React from "react";

function FooterNavigation() {
  return (
    <div className="">
      <nav className="text-white ">
        <Link href="/socials">Socials</Link>
        <Link href="/faqs">FAQs</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-services">Terms of Service</Link>
        <Link href="/contact-us" className="tracking-widest">Contact Us</Link>
      </nav>
    </div>
  );
}

export default FooterNavigation;
