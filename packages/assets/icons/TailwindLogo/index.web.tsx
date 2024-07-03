import { ColorContext } from '@app-launch-kit/utils/context/ColorModeContext';
import * as React from 'react';

const TailwindLogo = (props: any) => {
  const colorMode = React.useContext(ColorContext);
  return (
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.916 17.625C13.0827 12.9583 15.9993 10.625 20.666 10.625C27.666 10.625 28.541 15.875 32.041 16.75C34.3743 17.3333 36.416 16.4583 38.166 14.125C36.9993 18.7917 34.0827 21.125 29.416 21.125C22.416 21.125 21.541 15.875 18.041 15C15.7077 14.4167 13.666 15.2917 11.916 17.625ZM3.16602 28.125C4.33268 23.4583 7.24935 21.125 11.916 21.125C18.916 21.125 19.791 26.375 23.291 27.25C25.6243 27.8333 27.666 26.9583 29.416 24.625C28.2493 29.2917 25.3327 31.625 20.666 31.625C13.666 31.625 12.791 26.375 9.29102 25.5C6.95768 24.9167 4.91602 25.7917 3.16602 28.125Z"
        fill={colorMode === 'light' ? '#535252' : '#DCDBDB'}
      />
    </svg>
  );
};
export default TailwindLogo;
