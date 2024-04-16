'use client'

import Image from 'next/image'
import { useState } from 'react'
// import {CircleChevronLeft, CircleChevronRight} from 'lucide-react'
// import {ChevronLeftCircle, ChevronRightCircle} from 'lucide-react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import { PiDotOutlineFill } from "react-icons/pi";


const Carousel = ({slides}) => {
    const  [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentSlide === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentSlide - 1;
        
        setCurrentSlide(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentSlide === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentSlide + 1;

        setCurrentSlide(newIndex)
    }

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

  return (
    <div className='relative h-full'>
        {/* Left Arrow */}
        <div onClick={prevSlide} className=' z-10 absolute top-1/2 -translate-y-1/2 left-[32px] font-bold text-white bg-gray-200 bg-opacity-40 rounded-full p-2'>
            <BsChevronCompactLeft size={36} className=''/>
        </div>
        
        {/* Right Arrow */}
        <div onClick={nextSlide} className=' z-10 absolute top-1/2 -translate-y-1/2 right-[32px] font-bold text-white bg-gray-200 bg-opacity-40 rounded-full p-2'>
            <BsChevronCompactRight size={36}/>
        </div>

        <div style={{backgroundImage: `url(http://localhost:3000/images/stock/${slides[currentSlide]})`}} className='w-full h-full rounded-md bg-center bg-cover'></div>

        <div className="flex items-center justify-center mx-auto">
            {slides.map((slide, index) => (
                <div key={index} className='' onClick={() => goToSlide(index)}><PiDotOutlineFill size={24} className=' mb-3 cursor-pointer text-md' /></div>
            ))}
        </div>
    </div>
  )
}

export default Carousel