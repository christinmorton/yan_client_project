import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import testimonials from "../data/testimonials.json"
import projects from "../data/portfolio_projects.json"

const sliderImages = [
  'pexels-luis-yanez-206172.jpg',
    'pexels-christa-grover-1910472.jpg',
    'pexels-eduardo-romero-3124079.jpg',
    'pexels-mark-2724749.jpg',
    'pexels-william-lemond-105934.jpg',
    'pexels-stephen-leonardi-18041018.jpg'
];

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function getTestimonials() {
  return testimonials
}

export function getProjects() {
  return projects
}

export function getSliderImages() {
  return sliderImages
}