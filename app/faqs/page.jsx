// 'use client';

import FaqsBox from "@/components/FAQsBox";
import FAQForm from "@/components/forms/FAQForm";


function Faqs() {

  return (
    <main className="min-w-full">
      <div className="min-w-full min-h-screen grid grid-cols-4 bg-picton-blue-400">
        <div className="col-start-2 col-end-4">
          <h1 className="text-lg font-semi-bold text-center  mb-2 lg:text-xl lg:text-left text-picton-blue-200">Frequently Asked Questions</h1>
          <h2 className="text-lg font-semi-bold text-center  mb-2 lg:text-xl lg:text-left text-picton-blue-200">FAQ: Your Guide to Expert Tile Setting Services</h2>

          <h3 className="text-3xl font-semi-bold text-center lg:text-6xl lg:text-left text-picton-blue-100">Welcome to Yan&apos;s FAQ Page</h3>

          <h4 className="text-lg font-semi-bold text-center  mb-2 lg:text-xl lg:text-left text-picton-blue-200">
            Your Comprehensive Resource for Answers to Common Questions About
            Tile Setting Services
          </h4>

          <p className="max-w-md mx-auto text-sm text-center mb-4 text-white lg:text-lg lg:text-left lg:mt-0 lg:mx-0">
           Whether you&apos;re curious about our process, wondering what sets us
            apart, or seeking guidance on your upcoming tile project, you&apos;ll
            find the answers you need right here. Explore our frequently asked
            questions below and discover why Yan is the trusted choice for
            expert tile setting in the Las Vegas City area. If you don&apos;t see
            your question listed, don&apos;t hesitate to reach out to us directly for
            personalized assistance. Let&apos;s turn your vision into reality
            together.
          </p>
        </div>
      </div>

      <div id="faq-accordian" className="flex flex-col md:flex-row">
        <div className="container mx-auto px-6 mb-32">
          <p>Have a question you can ask right here!</p>

          <FAQForm />
        </div>

        <div className="container mx-auto px-6">
          <FaqsBox />
        </div>
      </div>
    </main>
  );
}

export default Faqs;
