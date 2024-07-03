import * as React from 'react';
import { ColorContext } from '@app-launch-kit/utils/context/ColorModeContext';

const GluestackLogo = (props: any) => {
  const colorMode = React.useContext(ColorContext);

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3.16602"
        y="4"
        width="33"
        height="33"
        rx="8"
        fill={colorMode === 'light' ? '#535252' : '#DCDBDB'}
      />
      <path
        d="M10.2383 18.5621L19.6666 11.6172V14.8946L10.2383 21.8396V18.5621Z"
        fill={colorMode === 'light' ? '#F6F6F6' : '#272625'}
      />
      <path
        d="M29.0957 18.5621L19.6674 11.6172V14.8946L29.0957 21.8396V18.5621Z"
        fill={colorMode === 'light' ? '#F6F6F6' : '#272625'}
      />
      <path
        d="M10.2363 26.1051L19.6646 19.1602V22.4376L10.2363 29.3825V26.1051Z"
        fill={colorMode === 'light' ? '#F6F6F6' : '#272625'}
      />
      <path
        d="M29.0938 26.1051L19.6655 19.1602V22.4376L29.0938 29.3825V26.1051Z"
        fill={colorMode === 'light' ? '#F6F6F6' : '#272625'}
      />
    </svg>
  );
};
export default GluestackLogo;
