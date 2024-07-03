import React, { useMemo } from 'react';
import { createIcon } from '@gluestack-ui/icon';

const accessClassName = (style: any) => {
  const obj = style[0];
  const keys = Object.keys(obj); //will return an array of keys
  return obj[keys[1]];
};

const Svg = ({ style, className, ...props }: any) => {
  const calculateClassName = useMemo(() => {
    return className === undefined ? accessClassName(style) : className;
  }, [className, style]);

  return <svg {...props} className={calculateClassName} />;
};

const HamburgerIcon: any = createIcon({
  Root: Svg,
  viewBox: '0 0 24 24',
  path: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  ),
});
export default HamburgerIcon;
