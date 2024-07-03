import type { Meta, StoryObj } from '@storybook/react';

import { TwoColumnTestimonialBasic } from './TwoColumnTestimonial';

const meta = {
  title: 'TwoColumnTestimonial',
  component: TwoColumnTestimonialBasic,
} satisfies Meta<typeof TwoColumnTestimonialBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
