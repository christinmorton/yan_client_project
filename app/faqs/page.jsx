'use client';

import {useState} from "react";

import { getFAQs } from "@/lib/utils";

function Faqs() {
  const faqs = getFAQs();

  const [isRotated, setIsRotated] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const toggleArrowRotation = () => {
    setIsRotated(!isRotated);
    setExpanded(!expanded);
  };

  const arrowStyle = {
    transform: isRotated ? 'rotate(-180deg)' : 'rotate(0deg)',
    transition: 'transform 0.5s ease',
    transformOrigin: '50% 50%',
    transformBox: 'fill-box',
  };


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
        </div>

        <div className="container mx-auto px-6">

        {faqs.map((faq, index) => {
          if(index % 2 === 0) {
            return (
              <div key={index} className="p-12 space-y-12">
                <div className="flex items-center justify-between py-3 text-gray-800 transition duration-500 ease cursor-pointer group">
                  <div className="transition duration-500 ease group-hover:text-picton-blue-400" onClick={toggleArrowRotation}>
                    <h3 className="max-w-md mx-auto text-sm text-center lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
                      <span>Q:&nbsp;</span>{faq.question}
                    </h3>
                  </div>
                  
                  {/* Arrow */}
                  <div className="relative" id="arrowContainer" onClick={toggleArrowRotation}>
                    <button className="absolute inset-0 w-full h-full focus:outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" style={arrowStyle}>
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          d="M1 1l8 8 8-8"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              
              <div tabIndex={index} className={`${expanded ? 'hidden transition duration-500 group-focus:max-h-screen.max-h-0 ease py-1 border-b border-picton-blue-400 outline-none space-y-4' : 'transition duration-500 group-focus:max-h-screen.max-h-0 ease py-1 border-b border-picton-blue-400 outline-none space-y-4'} transition duration-500 group-focus:max-h-screen.max-h-0 ease py-1 border-b border-picton-blue-400 outline-none space-y-4`}>
                <p className="max-w-md mx-auto text-md text-center text-picton-blue-400 lg:text-md lg:text-left lg:mt-0 lg:mx-0">
                  <span>A:&nbsp;</span> {faq.answer}
                </p>
                <h5 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-lg lg:text-right lg:mt-0 lg:mx-0">{faq.userName}</h5>
              </div>
            </div>
            )
          } else {
            return (
              <div key={index} className="p-12 bg-picton-blue-400 space-y-12 rounded-lg">
                <div className="flex items-center justify-between py-3 text-gray-800 transition duration-500 ease cursor-pointer group">
                  <div className="transition duration-500 ease group-hover:text-picton-blue-400" onClick={toggleArrowRotation}>
                    <h3 className="max-w-md mx-auto text-md text-center text-white lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
                      <span>Q:&nbsp;</span>{faq.question}
                    </h3>
                  </div>
                  
                  {/* Arrow */}
                  <div className="relative" id="arrowContainer" onClick={toggleArrowRotation}>
                    <button className="absolute inset-0 w-full h-full focus:outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" style={arrowStyle}>
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          d="M1 1l8 8 8-8"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              
              <div tabIndex={index} className={`${expanded ? 'hidden transition duration-500 group-focus:max-h-screen.max-h-0 ease py-1 border-b outline-none space-y-4 group' : 'transition duration-500 group-focus:max-h-screen.max-h-0 ease py-1 border-b border-picton-blue-400 outline-none space-y-4'} transition duration-500 group-focus:max-h-screen.max-h-0 ease py-1 border-b outline-none space-y-4 group`}>
                <p className="max-w-md mx-auto text-md text-center text-picton-blue-200 lg:text-md lg:text-left lg:mt-0 lg:mx-0">
                  <span>A:&nbsp;</span> {faq.answer}
                </p>
                <h5 className="max-w-md mx-auto text-sm text-center text-picton-blue-50 lg:text-lg lg:text-right lg:mt-0 lg:mx-0">{faq.userName}</h5>
              </div>
            </div>
            )
          }
        })}
        </div>
      </div>
    </main>
  );
}

export default Faqs;
