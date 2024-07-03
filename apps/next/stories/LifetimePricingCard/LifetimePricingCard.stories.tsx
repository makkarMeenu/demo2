import React from 'react';

import { LifetimePricingCardBasic } from './LifetimePricingCard';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'LifetimePricingCard',
  component: LifetimePricingCardBasic,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof LifetimePricingCardBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
