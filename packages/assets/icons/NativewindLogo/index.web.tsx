import { ColorContext } from '@app-launch-kit/utils/context/ColorModeContext';
import * as React from 'react';

const NativewindLogo = (props: any) => {
  const colorMode = React.useContext(ColorContext);
  return (
    <svg
      width="46"
      height="41"
      viewBox="0 0 46 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M23.2841 28.6417C30.955 28.6417 37.1736 26.2673 37.1736 23.3384C37.1736 20.4095 30.955 18.0352 23.2841 18.0352C15.6131 18.0352 9.39453 20.4095 9.39453 23.3384C9.39453 26.2673 15.6131 28.6417 23.2841 28.6417Z"
          stroke={colorMode === 'light' ? '#535252' : '#DCDBDB'}
          strokeWidth="1.4"
        />
        <path
          d="M18.6909 25.9902C22.5264 32.6334 27.6919 36.8317 30.2284 35.3672C32.7649 33.9027 31.7119 27.3301 27.8764 20.6869C24.0409 14.0436 18.8754 9.84538 16.3389 11.3098C13.8024 12.7743 14.8554 19.3469 18.6909 25.9902Z"
          stroke={colorMode === 'light' ? '#535252' : '#DCDBDB'}
          strokeWidth="1.4"
        />
        <path
          d="M18.692 20.6873C14.8565 27.3306 13.8035 33.9032 16.34 35.3676C18.8765 36.8321 24.042 32.6339 27.8775 25.9906C31.713 19.3473 32.766 12.7747 30.2295 11.3103C27.693 9.84582 22.5274 14.0441 18.692 20.6873Z"
          stroke={colorMode === 'light' ? '#535252' : '#DCDBDB'}
          strokeWidth="1.4"
        />
        <path
          d="M21.3939 23.4136C20.0583 23.4561 19.6613 24.4102 19.5703 24.9271C19.6889 24.7355 20.0624 24.3151 20.6124 24.3151C21.2533 24.3151 21.7413 25.0304 22.039 25.2537C22.4007 25.525 23.1275 25.8832 24.0817 25.5928C24.8426 25.3613 25.1955 24.5535 25.2726 24.1703C24.9046 24.6707 24.3464 24.9712 23.6558 24.6169C23.1803 24.373 22.8247 23.3681 21.3939 23.4136Z"
          fill={colorMode === 'light' ? '#535252' : '#DCDBDB'}
        />
        <path
          d="M23.1185 20.9781C21.7829 21.0205 21.3859 21.9746 21.2949 22.4915C21.4135 22.2999 21.787 21.8795 22.337 21.8795C22.9779 21.8795 23.4659 22.5949 23.7636 22.8182C24.1253 23.0895 24.8521 23.4477 25.8063 23.1573C26.5672 22.9257 26.9201 22.118 26.9973 21.7348C26.6292 22.2351 26.071 22.5357 25.3804 22.1814C24.9049 21.9374 24.5493 20.9326 23.1185 20.9781Z"
          fill={colorMode === 'light' ? '#535252' : '#DCDBDB'}
        />
      </g>
      <defs>
        <clipPath id="clip0_9229_8286">
          <rect
            width="45"
            height="45"
            fill="white"
            transform="translate(0.166016 0.0996094)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default NativewindLogo;
