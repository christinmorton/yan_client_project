// "use client";
import { getFAQs } from "@/lib/utils";
import FaqItem from "./FAQItem";  // Import FaqItem component

function FaqsBox() {
  const faqs = getFAQs();

  return (
    <div id="faq-accordian" className="flex flex-col md:flex-row">
      <div className="container mx-auto px-6">
        {faqs.map((faq, index) => (
          <FaqItem key={index} faq={faq} index={index} />
        ))}
      </div>
    </div>
  );
}

export default FaqsBox;
