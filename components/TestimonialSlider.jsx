'use client'
import Image from 'next/image';
import { useState } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { PiDotOutlineFill } from 'react-icons/pi';

import SliderCard from './SliderCard';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const TestimonialSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalWidth = slides.length * 600

  console.log(slides)

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-full ">
      {/* Left Arrow */}
      {/* <div
        onClick={prevSlide}
        className="absolute top-1/2 left-[32px] font-bold text-white bg-gray-200 bg-opacity-40 rounded-full p-2 z-10"
      >
        <BsChevronCompactLeft size={36} />
      </div> */}

      {/* Right Arrow */}
      {/* <div
        onClick={nextSlide}
        className="absolute top-1/2 right-[32px] font-bold text-white bg-gray-200 bg-opacity-40 rounded-full p-2 z-10"
      >
        <BsChevronCompactRight size={36} />
      </div> */}

      <div
        id='sliderContent'
        className=' flex flex-row'
        // style={{ scrollLeft: currentSlide * 600 }}
        // className={`w-[${totalWidth}px] h-full flex justify-center p-6 transition-transform duration-500 overflow-x-scroll scroll scrollbar-hide scroll-smooth  `}
      >

        <Carousel 
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {slides.map((testimonial, index) => (
            <SliderCard key={index} testimonial={testimonial} />
          ))}
        </Carousel>

        
      </div>

      {/* <div className="flex items-center justify-center mt-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`mx-2 cursor-pointer ${
              currentSlide === index ? 'text-blue-500' : ''
            }`}
            onClick={() => goToSlide(index)}
          >
            <PiDotOutlineFill size={24} />
          </div>
        ))}
      </div> */}
      <button onClick={() => goToSlide(0)}>Slide 1</button>
<button onClick={() => goToSlide(1)}>Slide 2</button>
    </div>
  );
};

export default TestimonialSlider;
