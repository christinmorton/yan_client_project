'use client';
import { useState } from "react";

const FaqItem = ({ faq, index }) => {
  const [isRotated, setIsRotated] = useState(false);
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

  const contentStyle = {
    maxHeight: expanded ? 'max-content' : '0',
    overflow: 'hidden',
    transition: 'max-height 0.5s ease-in-out',
  };

  return (
    <div className={index % 2 === 0 ? 'p-12 space-y-12' : 'p-12 bg-picton-blue-400 space-y-12 rounded-lg'}>
      <div className="flex flex-row items-center justify-between py-3 space-x-2" onClick={toggleArrowRotation}>
        <div className="transition duration-500 ease">
          <h3 className={`max-w-md mx-auto text-md text-center lg:text-xl lg:text-left lg:mt-0 lg:mx-0 ${index % 2 === 0 ? 'text-picton-blue-400' : 'text-white'}`}>
            <span>Q:&nbsp;</span>{faq.question}
          </h3>
        </div>
        
        {/* Arrow */}
        <div className="relative" onClick={toggleArrowRotation}>
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
      
      {/* Content */}
      <div tabIndex={index} className="transition duration-500 ease" style={contentStyle}>
        <p className={`max-w-md mx-auto text-md text-center lg:text-md lg:text-left lg:mt-0 lg:mx-0 ${index % 2 === 0 ? 'text-picton-blue-400' : 'text-white'}`}>
          <span>A:&nbsp;</span> {faq.answer}
        </p>
        <h5 className="max-w-md mx-auto text-sm text-center text-picton-blue-700 lg:text-lg lg:text-right lg:mt-0 lg:mx-0">{faq.userName}</h5>
      </div>
    </div>
  );
};

export default FaqItem;
