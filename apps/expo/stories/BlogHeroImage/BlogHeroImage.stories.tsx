import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { BlogHeroImageBasic } from './BlogHeroImage';

const meta = {
  title: 'BlogHeroImage',
  component: BlogHeroImageBasic,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof BlogHeroImageBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
