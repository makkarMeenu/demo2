import { Meta, StoryObj } from '@storybook/react';

import { TestimonialWithImageBasic } from './TestimonialWithImage';

const meta = {
  title: 'TestimonialWithImage',
  component: TestimonialWithImageBasic,
} satisfies Meta<typeof TestimonialWithImageBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
