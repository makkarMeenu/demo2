import { ThreeCardPricingLayoutBasic } from './ThreeCardPricingLayout';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ThreeCardPricingLayout',
  component: ThreeCardPricingLayoutBasic,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof ThreeCardPricingLayoutBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
