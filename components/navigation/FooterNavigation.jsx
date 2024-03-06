import Link from "next/link";
import React from "react";

function FooterNavigation() {
  return (
    <div className="col-start-1 col-end-4">
      <nav className="text-white grid grid-cols-5 gap-4">
        <Link href="/socials">Socials</Link>
        <Link href="/faqs">FAQs</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-services">Terms of Service</Link>
      </nav>
    </div>
  );
}

export default FooterNavigation;
