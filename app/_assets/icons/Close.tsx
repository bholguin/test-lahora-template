import {FC, SVGProps} from 'react';

export const Close: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" {...props} xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2503_6565)">
        <path d="M22.1668 7.47825L20.5218 5.83325L14.0002 12.3549L7.4785 5.83325L5.8335 7.47825L12.3552 13.9999L5.8335 20.5216L7.4785 22.1666L14.0002 15.6449L20.5218 22.1666L22.1668 20.5216L15.6452 13.9999L22.1668 7.47825Z" fill={props.fill}/>
      </g>
      <defs>
        <clipPath id="clip0_2503_6565" >
          <rect width="28" height="28" fill={'white'}/>
        </clipPath>
      </defs>
    </svg>
  );
};
