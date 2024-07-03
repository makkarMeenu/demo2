import React from 'react';
import { TwoColumnTestimonial } from '@app-launch-kit/components/custom/testimonials/TwoColumnTestimonial';
import testimonials from '@app-launch-kit/utils/constants/ratingTestimonials';

export const TwoColumnTestimonialBasic = () => {
  return <TwoColumnTestimonial testimonials={testimonials} />;
};
