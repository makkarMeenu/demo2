import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { HorizontalCtaBasic } from './HorizontalCta';

const meta = {
  title: 'HorizontalCta',
  component: HorizontalCtaBasic,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof HorizontalCtaBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
