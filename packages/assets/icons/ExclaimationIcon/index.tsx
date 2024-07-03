import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import { createIcon } from '@gluestack-ui/icon';
import { cssInterop } from 'nativewind';

cssInterop(Svg, {
  className: {
    target: 'style',
    // @ts-ignore
    nativeStyleToProp: { width: true, height: true, fill: true },
  },
});

const ExclaimationIcon: any = createIcon({
  Root: Svg,
  viewBox: '0 0 12 12',
  path: (
    <>
      <G
        clipPath="url(#clip0_8758_610)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#414040"
      >
        <Path d="M.5 6a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zM6 1.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
        <Path d="M6 3.5a.5.5 0 01.5.5v2a.5.5 0 01-1 0V4a.5.5 0 01.5-.5zM5.5 8a.5.5 0 01.5-.5h.005a.5.5 0 010 1H6a.5.5 0 01-.5-.5z" />
      </G>
      <Defs>
        <ClipPath id="clip0_8758_610">
          <Path fill="#fff" d="M0 0H12V12H0z" />
        </ClipPath>
      </Defs>
    </>
  ),
});

export default ExclaimationIcon;
