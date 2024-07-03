import React from 'react';
import { TestimonialWithImage } from '@app-launch-kit/components/custom/testimonials/TestimonialWithImage';
import testimonialData from '@app-launch-kit/utils/constants/testimonialWithImage';

export const TestimonialWithImageBasic = () => {
  return <TestimonialWithImage {...testimonialData} />;
};
