'use client';

import {useState} from 'react'
import Image from 'next/image'

const SliderCard = ({ testimonial }) => {
  return (
    <div className="w-full flex flex-col items-center hover:scale-105 ease-in-out duration-500">
      <div>
        <Image
          src={`/images/profile_pics/${testimonial.image}`}
          alt={`A photo of ${testimonial.first_name} ${testimonial.last_name}, a satisfied customer!`}
          className="rounded-full"
          loading="lazy"
          width={100}
          height={100}
          unoptimized={true}
        />
        <h4 className="mt-4">
          {testimonial.first_name} {testimonial.last_name}
        </h4>
        <h4 className="mb-2">{testimonial.services_used}</h4>
        <p>{testimonial.testimonial}</p>
      </div>
    </div>
  );
};

export default SliderCard