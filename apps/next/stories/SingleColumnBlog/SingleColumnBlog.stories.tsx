import React from 'react';
import { SingleColumnBlogBasic } from './SingleColumnBlog';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'SingleColumnBlog',
  component: SingleColumnBlogBasic,
} satisfies Meta<typeof SingleColumnBlogBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
