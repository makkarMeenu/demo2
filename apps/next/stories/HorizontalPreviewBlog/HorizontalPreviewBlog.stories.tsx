import React from 'react';
import { HorizontalPreviewBlogBasic } from './HorizontalPreviewBlog';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'HorizontalPreviewBlog',
  component: HorizontalPreviewBlogBasic,
} satisfies Meta<typeof HorizontalPreviewBlogBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
