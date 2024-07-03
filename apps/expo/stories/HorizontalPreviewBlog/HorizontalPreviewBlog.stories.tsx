import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { HorizontalPreviewBlogBasic } from './HorizontalPreviewBlog';

const meta = {
  title: 'HorizontalPreviewBlog',
  component: HorizontalPreviewBlogBasic,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof HorizontalPreviewBlogBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
