import { Meta, StoryObj } from '@storybook/react';

import { SocialMediaGridTestimonialBasic } from './SocialMediaGridTestimonial';

const meta = {
  title: 'SocialMediaGridTestimonial',
  component: SocialMediaGridTestimonialBasic,
} satisfies Meta<typeof SocialMediaGridTestimonialBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
