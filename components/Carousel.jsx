'use client'

import { useState } from 'react'
// import {CircleChevronLeft, CircleChevronRight} from 'lucide-react'
import {ChevronLeftCircle, ChevronRightCircle} from 'lucide-react'

const Carousel = ({children: slides}) => {
    const  [currentSlide, setCurrentSlide] = useState(0);


    const prevSlide = () => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
    const nextSlide = () => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)

  return (
    <div className='overflow-hidden relative'>
        <div className='flex items-center justify-around transition-transform ease-out duration-500' style={{transform: `translateX(-${currentSlide * 100}%)`}}>
            {slides.map((slide, index) => (
                <div key={index} className="flex-shrink-0 w-full" style={{flexShrink: 0}}>
                    {slide}
                </div>
            ))}
            
            {/* {slides}         */}
        </div>
        <div className='absolute inset-0 flex items-center justify-between p-4'>
            <button onClick={prevSlide} className='p-1 rounded-full shadow  bg-white/80 text-gray-800 hover:bg-white'>
                <ChevronLeftCircle size={48} />
            </button>
           
            <button onClick={nextSlide} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                <ChevronRightCircle size={48} />
            </button>
        </div>
    </div>
  )
}

export default Carousel