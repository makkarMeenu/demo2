import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { MiddleAlignedCtaBasic } from './MiddleAlignedCta';

const meta = {
  title: 'MiddleAlignedCta',
  component: MiddleAlignedCtaBasic,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof MiddleAlignedCtaBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
