import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { CtaWithSplitImageBasic } from './CtaWithSplitImage';

const meta = {
  title: 'CtaWithSplitImage',
  component: CtaWithSplitImageBasic,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof CtaWithSplitImageBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
