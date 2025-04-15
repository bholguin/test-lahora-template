import {FC, SVGProps} from 'react';

export const Gnews: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
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
    >
      <path
        fill={props.color}
        d="M25.7,9.4h-9.1v2.4h9.1c-0.1,0,0.1,0,0.1-0.1V9.5C25.9,9.4,25.9,9.4,25.7,9.4L25.7,9.4z M8.4,9.6
      c-3,0-5.6,2.5-5.6,5.6c0,3,2.5,5.4,5.7,5.4s5.4-2.4,5.4-5.4c0-0.4,0-0.7-0.1-1.1H8.5v2.1h3c-0.3,1.3-1.5,2.1-3,2.1
      c-1.9-0.1-3.4-1.7-3.2-3.4c0-1.9,1.5-3.2,3.2-3.2c0.8,0,1.5,0.3,2.1,0.9l1.5-1.5C11,10.2,9.7,9.6,8.4,9.6L8.4,9.6z M27,13.7H16.5
      v2.4H27c0,0,0.1,0,0.1-0.1v-2.1C27.2,13.7,27.2,13.7,27,13.7L27,13.7z M25.7,18.2h-9.1v2.4h9.1c-0.1,0,0.1-0.1,0.1-0.1v-2.1
      C25.9,18.2,25.9,18.2,25.7,18.2L25.7,18.2z"
      />
    </svg>
  );
};
