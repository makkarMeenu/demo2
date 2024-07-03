import '../globals.css';
import { GluestackUIProvider } from '@app-launch-kit/components/primitives/gluestack-ui-provider';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import type { Preview } from '@storybook/react';
import React from 'react';

const preview: Preview = {
  decorators: [
    withBackgrounds,
    (Story) => (
      <GluestackUIProvider mode="light">
        <Story />
      </GluestackUIProvider>
    ),
  ],

  parameters: {
    backgrounds: {
      default: 'plain',
      values: [
        { name: 'plain', value: 'white' },
        { name: 'warm', value: 'hotpink' },
        { name: 'cool', value: 'deepskyblue' },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
