import React from 'react';
import { SingleColumnPricingLayoutBasic } from './SingleColumnPricingLayout';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'SingleColumnPricingLayout',
  component: SingleColumnPricingLayoutBasic,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof SingleColumnPricingLayoutBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
