import { ColorContext } from '@app-launch-kit/utils/context/ColorModeContext';
import { cssInterop } from 'nativewind';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

cssInterop(Svg, {
  className: {
    target: 'style',
    // @ts-ignore
    nativeStyleToProp: { width: true, height: true, fill: true },
  },
});

const ExpoLogo = (props: any) => {
  const colorMode = React.useContext(ColorContext);
  return (
    <Svg width="41" height="40" viewBox="0 0 41 40" fill="none">
      <Path
        d="M4.16602 30.971C4.22514 31.6998 4.48227 32.4326 5.15327 33.4158C5.95077 34.5831 7.32027 35.2239 8.31989 34.1954C8.99364 33.501 16.2866 20.7534 19.8011 15.9216C19.8974 15.7832 20.0257 15.6701 20.1751 15.592C20.3245 15.514 20.4906 15.4732 20.6591 15.4732C20.8277 15.4732 20.9938 15.514 21.1432 15.592C21.2926 15.6701 21.4209 15.7832 21.5171 15.9216C25.0316 20.7534 32.3246 33.501 32.9984 34.1954C33.998 35.2239 35.3675 34.5831 36.165 33.4158C36.9488 32.2676 37.166 31.4633 37.166 30.6025C37.166 30.0168 25.8085 8.88025 24.6645 7.12025C23.5645 5.429 23.229 5.0605 21.3686 5H19.9496C18.0893 5.0605 17.7538 5.42763 16.6524 7.12025C15.5331 8.84312 4.61977 29.1478 4.16602 30.5393V30.971Z"
        fill={colorMode === 'light' ? '#535252' : '#DCDBDB'}
      />
    </Svg>
  );
};
export default ExpoLogo;
