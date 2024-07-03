import React from 'react';
import { BlogHeroImageBasic } from './BlogHeroImage';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'BlogHeroImage',
  component: BlogHeroImageBasic,
} satisfies Meta<typeof BlogHeroImageBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
