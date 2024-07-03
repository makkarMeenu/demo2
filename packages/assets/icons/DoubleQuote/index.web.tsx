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

export const DoubleQuoteGray: any = createIcon({
  Root: Svg,
  viewBox: '0 0 72 72',
  path: (
    <path
      d="M27 9C12.15 9 0 21.15 0 36V63H27V36H9C9 26.01 17.01 18 27 18V9ZM72 9C57.15 9 45 21.15 45 36V63H72V36H54C54 26.01 62.01 18 72 18V9Z"
      fill="#F2F1F1"
    />
  ),
});

export const DoubleQuoteOrange: any = createIcon({
  Root: Svg,
  viewBox: '0 0 72 72',
  path: (
    <path
      d="M27 9C12.15 9 0 21.15 0 36V63H27V36H9C9 26.01 17.01 18 27 18V9ZM72 9C57.15 9 45 21.15 45 36V63H72V36H54C54 26.01 62.01 18 72 18V9Z"
      fill="#FDBA74"
    />
  ),
});
