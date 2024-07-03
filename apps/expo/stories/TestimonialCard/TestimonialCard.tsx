import React from 'react';
import { TestimonialCard } from '@app-launch-kit/components/custom/testimonials/TestimonialCard';
import testimonialCardData from '@app-launch-kit/utils/constants/testimonialCard';

export const TestimonialCardBasic = () => {
  return <TestimonialCard {...testimonialCardData} />;
};
