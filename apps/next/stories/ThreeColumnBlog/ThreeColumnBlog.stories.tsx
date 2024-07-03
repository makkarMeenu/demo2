import { ThreeColumnBlogBasic } from './ThreeColumnBlog';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ThreeColumnBlog',
  component: ThreeColumnBlogBasic,
} satisfies Meta<typeof ThreeColumnBlogBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
