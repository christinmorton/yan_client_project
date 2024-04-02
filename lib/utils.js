import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import testimonials from "../data/testimonials.json"
import projects from "../data/portfolio_projects.json"

const sliderImages = [
  'pexels-christa-grover-1910472.jpg',
  'pexels-eduardo-romero-3124079.jpg',
  'pexels-julia-kuzenkov-1974596.jpg',
  'pexels-luis-yanez-206172.jpg',
  'pexels-max-vakhtbovycn-6585758.jpg',
  'pexels-max-vakhtbovycn-6587830.jpg'
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