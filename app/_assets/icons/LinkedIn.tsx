import {FC, SVGProps} from 'react';

export const LinkedIn: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      version="1.1"
      baseProfile="tiny"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 30 30"
      overflow="visible"
      xmlSpace="preserve"
      {...props}
    >
      <path
        fill={props.color}
        strokeWidth="1.2656"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M10.2,8.3c0,1.1-0.9,2.1-2.2,2.1l0,0c-1.3,0-2.1-0.9-2.1-2.1c0-1.1,0.9-2.1,2.2-2.1C9.4,6.3,10.2,7.1,10.2,8.3z M6.1,23.7H10V11.9
        H6.1V23.7z M19.6,11.7c-2.1,0-3.5,2-3.5,2v-1.7h-3.9v11.8H16v-6.6c0-0.3,0-0.7,0.1-0.9c0.3-0.7,0.9-1.4,2-1.4c1.4,0,2,1.1,2,2.7v6.3
        h3.9V17C24.1,13.3,22.2,11.7,19.6,11.7z"
      />
    </svg>
  );
};
