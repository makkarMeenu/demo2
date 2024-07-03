import { ColorContext } from '@app-launch-kit/utils/context/ColorModeContext';
import * as React from 'react';

const NextLogo = (props: any) => {
  const colorMode = React.useContext(ColorContext);
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5007 36.6663C11.2957 36.6663 3.83398 29.2047 3.83398 19.9997C3.83398 10.7947 11.2957 3.33301 20.5007 3.33301C29.7057 3.33301 37.1673 10.7947 37.1673 19.9997C37.1673 29.2047 29.7057 36.6663 20.5007 36.6663ZM27.1673 13.333H24.9173V19.9997H27.1673V13.333ZM16.0773 16.183L26.1756 29.2297L27.9323 27.8813L16.639 13.333H13.834V26.6613H16.0773V16.183Z"
        fill={colorMode === 'light' ? '#535252' : '#DCDBDB'}
      />
    </svg>
  );
};
export default NextLogo;
