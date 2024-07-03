import { Meta, StoryObj } from '@storybook/react';

import { SocialMediaTestimonialBasic } from './SocialMediaTestimonial';

const meta = {
  title: 'SocialMediaTestimonial',
  component: SocialMediaTestimonialBasic,
} satisfies Meta<typeof SocialMediaTestimonialBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
