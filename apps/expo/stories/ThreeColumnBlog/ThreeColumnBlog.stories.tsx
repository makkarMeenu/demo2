import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ThreeColumnBlogBasic } from './ThreeColumnBlog';

const meta = {
  title: 'ThreeColumnBlog',
  component: ThreeColumnBlogBasic,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof ThreeColumnBlogBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
