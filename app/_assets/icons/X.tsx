import {FC, SVGProps} from 'react';

export const X: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} version="1.1" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30" overflow="visible" xmlSpace="preserve">
      <path fill={props.color} d="M5.9,6.1l7.1,9.8l-7.1,7.9h1.6l6.2-7l5,7h5.4l-7.5-10.3l6.6-7.4h-1.6L16,12.5l-4.6-6.4L5.9,6.1L5.9,6.1zM8.2,7.4h2.5l11,15.3h-2.5L8.2,7.4z"/>
    </svg>
  );
};
