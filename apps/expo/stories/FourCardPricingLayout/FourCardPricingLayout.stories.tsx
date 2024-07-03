import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { FourCardPricingLayoutBasic } from './FourCardPricingLayout';

const meta = {
  title: 'FourCardPricingLayout',
  component: FourCardPricingLayoutBasic,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof FourCardPricingLayoutBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
