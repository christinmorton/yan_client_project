import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import testimonials from "../data/testimonials.json"
import projects from "../data/portfolio_projects.json"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function getTestimonials() {
  return testimonials
}

export function getProjects() {
  return projects
}