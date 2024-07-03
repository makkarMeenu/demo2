import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { SingleColumnBlogBasic } from './SingleColumnBlog';

const meta = {
  title: 'SingleColumnBlog',
  component: SingleColumnBlogBasic,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof SingleColumnBlogBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
