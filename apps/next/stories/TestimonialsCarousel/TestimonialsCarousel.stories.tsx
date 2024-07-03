import { Meta, StoryObj } from '@storybook/react';

import { TestimonialsCarouselBasic } from './TestimonialsCarousel';

const meta = {
  title: 'TestimonialsCarousel',
  component: TestimonialsCarouselBasic,
} satisfies Meta<typeof TestimonialsCarouselBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
