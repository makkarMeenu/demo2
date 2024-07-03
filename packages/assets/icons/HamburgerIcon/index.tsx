import { cssInterop } from 'nativewind';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { createIcon } from '@gluestack-ui/icon';

cssInterop(Svg, {
  className: {
    target: 'style',
    // @ts-ignore
    nativeStyleToProp: { width: true, height: true, fill: true, stroke: true },
  },
});

const HamburgerIcon: any = createIcon({
  Root: Svg,
  viewBox: '0 0 24 24',
  path: (
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  ),
});
export default HamburgerIcon;
