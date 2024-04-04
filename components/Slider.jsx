'use client'

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// register Swiper custom elements
register();

const Slider = ({children: slides}) => {
  return (
    <div className='p-12'>
        <swiper-container 
            effects={['coverflow']}
            centeredSlides="true"
            grabCursor="true"
            slides-per-view="1" 
            speed="500" 
            loop="true" 
            css-mode="true" 
            navigation="true" 
            pagination="true" 
            scrollbar="true"
        >
            {slides.map((slide, index) => (
                <swiper-slide key={index}>
                    {slide}
                </swiper-slide>
            ))}
        </swiper-container>
    </div>
  )
}

export default Slider