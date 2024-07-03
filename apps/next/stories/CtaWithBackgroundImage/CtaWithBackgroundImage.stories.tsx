import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { CtaWithBackgroundImageBasic } from './CtaWithBackgroundImage';

const meta = {
  title: 'CtaWithBackgroundImage',
  component: CtaWithBackgroundImageBasic,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof CtaWithBackgroundImageBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
