import React from 'react';
import { TestimonialsCarousel } from '@app-launch-kit/components/custom/testimonials/TestimonialsCarousel';
import carouselTestimonials from '@app-launch-kit/utils/constants/carouselTestimonials';

export const TestimonialsCarouselBasic = () => {
  return <TestimonialsCarousel testimonials={carouselTestimonials} />;
};
