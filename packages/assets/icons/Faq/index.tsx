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

export const FaqIcon: any = createIcon({
  Root: Svg,
  viewBox: '0 0 16 17',
  path: (
    <G>
      <Path
        d="M4 6C4 5.72386 4.22386 5.5 4.5 5.5H5.5C5.77614 5.5 6 5.72386 6 6C6 6.27614 5.77614 6.5 5.5 6.5H4.5C4.22386 6.5 4 6.27614 4 6ZM4 8.5C4 8.22386 4.22386 8 4.5 8H5.5C5.77614 8 6 8.22386 6 8.5C6 8.77614 5.77614 9 5.5 9H4.5C4.22386 9 4 8.77614 4 8.5ZM4.5 10.5C4.22386 10.5 4 10.7239 4 11C4 11.2761 4.22386 11.5 4.5 11.5H5.5C5.77614 11.5 6 11.2761 6 11C6 10.7239 5.77614 10.5 5.5 10.5H4.5ZM4.5 3.5C3.11929 3.5 2 4.61929 2 6V11C2 12.3807 3.11929 13.5 4.5 13.5H11.5C12.8807 13.5 14 12.3807 14 11V6C14 4.61929 12.8807 3.5 11.5 3.5H4.5ZM3 6C3 5.17157 3.67157 4.5 4.5 4.5H7L7 12.5H4.5C3.67157 12.5 3 11.8284 3 11V6ZM8 12.5L8 4.5H11.5C12.3284 4.5 13 5.17157 13 6V11C13 11.8284 12.3284 12.5 11.5 12.5H8Z"
        fill="#414040"
      />
    </G>
  ),
});
