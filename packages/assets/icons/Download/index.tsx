import React from 'react';
import { createIcon } from '@gluestack-ui/icon';
import { Path, G, Svg } from 'react-native-svg';
import { cssInterop } from 'nativewind';

cssInterop(Svg, {
  className: {
    target: 'style',
    // @ts-ignore
    nativeStyleToProp: { width: true, height: true, fill: true },
  },
});
export const DownloadIcon: any = createIcon({
  Root: Svg,
  viewBox: '0 0 16 17',
  path: (
    <G>
      <Path
        d="M5 1.5C3.89543 1.5 3 2.39543 3 3.5V13.5C3 14.6046 3.89543 15.5 5 15.5H11C12.1046 15.5 13 14.6046 13 13.5V5.91421C13 5.51639 12.842 5.13486 12.5607 4.85355L9.64645 1.93934C9.36514 1.65804 8.98361 1.5 8.58579 1.5H5ZM4 3.5C4 2.94772 4.44772 2.5 5 2.5H8V5C8 5.82843 8.67157 6.5 9.5 6.5H12V13.5C12 14.0523 11.5523 14.5 11 14.5H5C4.44772 14.5 4 14.0523 4 13.5V3.5ZM11.7929 5.5H9.5C9.22386 5.5 9 5.27614 9 5V2.70711L11.7929 5.5Z"
        fill="#414040"
      />
    </G>
  ),
});
