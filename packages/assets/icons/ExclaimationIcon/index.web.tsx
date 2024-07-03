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

const ExclaimationIcon: any = createIcon({
  Root: Svg,
  viewBox: '0 0 12 12',
  path: (
    <>
      <g
        clipPath="url(#clip0_8758_610)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#414040"
      >
        <path d="M.5 6a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zM6 1.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
        <path d="M6 3.5a.5.5 0 01.5.5v2a.5.5 0 01-1 0V4a.5.5 0 01.5-.5zM5.5 8a.5.5 0 01.5-.5h.005a.5.5 0 010 1H6a.5.5 0 01-.5-.5z" />
      </g>
      <defs>
        <clipPath id="clip0_8758_610">
          <path fill="#fff" d="M0 0H12V12H0z" />
        </clipPath>
      </defs>
    </>
  ),
});

export default ExclaimationIcon;
