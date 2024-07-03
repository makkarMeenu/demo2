import React from 'react';
import { FourCardPricingLayoutBasic } from './FourCardPricingLayout';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'FourCardPricingLayout',
  component: FourCardPricingLayoutBasic,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof FourCardPricingLayoutBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
