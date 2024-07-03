import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { BlogCardBasic } from './BlogCard';

const meta = {
  title: 'BlogCard',
  component: BlogCardBasic,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof BlogCardBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
