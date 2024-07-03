import React from 'react';
import { PricingCardWithComparisionTableBasic } from './PricingCardWithComparisionTable';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'PricingCardWithComparisionTable',
  component: PricingCardWithComparisionTableBasic,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof PricingCardWithComparisionTableBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
