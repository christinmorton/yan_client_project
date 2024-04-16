'use client'

import Image from 'next/image'
import { useState } from 'react'
// import {CircleChevronLeft, CircleChevronRight} from 'lucide-react'
// import {ChevronLeftCircle, ChevronRightCircle} from 'lucide-react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'


const Carousel = ({children}) => {
    const  [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentSlide === 0;
        const newSlide = isFirstSlide ? children.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    }

    const nextSlide = () => {}

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
            {children}
        </div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block z-30 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft />
        </div>
        
        {/* Right Arrow */}
        <div className='hidden group-hover:block z-30 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight />
        </div>
    </div>
  )
}

export default Carousel