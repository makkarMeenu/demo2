import { ColorContext } from '@app-launch-kit/utils/context/ColorModeContext';
import * as React from 'react';

const SupabaseLogo = (props: any) => {
  const colorMode = React.useContext(ColorContext);
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9327_7858)">
        <path
          d="M23.6216 39.3359C22.6007 40.6225 20.5266 39.9178 20.5038 38.2743L20.1426 14.2412H36.3035C39.2301 14.2412 40.862 17.6215 39.042 19.9128L23.6216 39.3359Z"
          fill={colorMode === 'light' ? '#747474' : '#D5D4D4'}
        />
        <path
          d="M17.0469 0.666416C18.0678 -0.620147 20.1422 0.0845409 20.1647 1.72767L20.3234 25.7611H4.36498C1.43842 25.7611 -0.193456 22.3808 1.62623 20.0895L17.0469 0.666416Z"
          fill={colorMode === 'light' ? '#535252' : '#DCDBDB'}
        />
      </g>
      <defs>
        <clipPath id="clip0_9327_7858">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(0.333984 0.000976562)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SupabaseLogo;
