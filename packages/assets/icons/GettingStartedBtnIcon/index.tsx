import { ColorContext } from '@app-launch-kit/utils/context/ColorModeContext';
import React, { useContext } from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

const GettingStartedBtnIcon = (props: any) => {
  const colorMode = useContext(ColorContext);
  return (
    <Svg width="20" height="21" viewBox="0 0 20 21" fill="none">
      <G clipPath="url(#clip0_9230_8347)">
        <Path
          d="M19.2 0.5H0.8C0.3575 0.5 0 0.8575 0 1.3V19.7C0 20.1425 0.3575 20.5 0.8 20.5H19.2C19.6425 20.5 20 20.1425 20 19.7V1.3C20 0.8575 19.6425 0.5 19.2 0.5ZM10.0275 10.6525L5.2275 14.6775C5.0975 14.7875 4.9 14.695 4.9 14.525V12.9575C4.9 12.9 4.9275 12.8425 4.9725 12.805L7.7175 10.5L4.9725 8.195C4.94952 8.17685 4.93103 8.15366 4.91846 8.12721C4.90588 8.10076 4.89957 8.07178 4.9 8.0425V6.475C4.9 6.305 5.0975 6.2125 5.2275 6.3225L10.0275 10.345C10.125 10.425 10.125 10.5725 10.0275 10.6525ZM15.1 14.525C15.1 14.635 15.015 14.725 14.9125 14.725H10.2875C10.185 14.725 10.1 14.635 10.1 14.525V13.325C10.1 13.215 10.185 13.125 10.2875 13.125H14.9125C15.015 13.125 15.1 13.215 15.1 13.325V14.525Z"
          fill={colorMode === 'light' ? '#414040' : '#F2F1F1'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_9230_8347">
          <Rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0 0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default GettingStartedBtnIcon;
