import type { Meta, StoryObj } from '@storybook/react';

import { TestimonialCardBasic } from './TestimonialCard';

const meta = {
  title: 'TestimonialCard',
  component: TestimonialCardBasic,
} satisfies Meta<typeof TestimonialCardBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
