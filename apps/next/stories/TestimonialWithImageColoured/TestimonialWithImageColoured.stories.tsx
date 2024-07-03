import { Meta, StoryObj } from '@storybook/react';

import { TestimonialWithImageColouredBasic } from './TestimonialWithImageColoured';

const meta = {
  title: 'TestimonialWithImageColoured',
  component: TestimonialWithImageColouredBasic,
} satisfies Meta<typeof TestimonialWithImageColouredBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
