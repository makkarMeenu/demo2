import { Meta, StoryObj } from '@storybook/react';
import { BlogCardBasic } from './BlogCard';

const meta = {
  title: 'BlogCard',
  component: BlogCardBasic,
} satisfies Meta<typeof BlogCardBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
