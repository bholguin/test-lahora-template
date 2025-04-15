import {FC, SVGProps} from 'react';

export const Play: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.375 35.525L35.525 24.5L18.375 13.475V35.525ZM24.5 49C21.1108 49 17.9258 48.3569 14.945 47.0706C11.9642 45.7844 9.37125 44.0387 7.16625 41.8338C4.96125 39.6288 3.21563 37.0358 1.92938 34.055C0.643125 31.0742 0 27.8892 0 24.5C0 21.1108 0.643125 17.9258 1.92938 14.945C3.21563 11.9642 4.96125 9.37125 7.16625 7.16625C9.37125 4.96125 11.9642 3.21563 14.945 1.92938C17.9258 0.643125 21.1108 0 24.5 0C27.8892 0 31.0742 0.643125 34.055 1.92938C37.0358 3.21563 39.6288 4.96125 41.8338 7.16625C44.0387 9.37125 45.7844 11.9642 47.0706 14.945C48.3569 17.9258 49 21.1108 49 24.5C49 27.8892 48.3569 31.0742 47.0706 34.055C45.7844 37.0358 44.0387 39.6288 41.8338 41.8338C39.6288 44.0387 37.0358 45.7844 34.055 47.0706C31.0742 48.3569 27.8892 49 24.5 49ZM24.5 44.1C29.9717 44.1 34.6063 42.2013 38.4038 38.4038C42.2013 34.6063 44.1 29.9717 44.1 24.5C44.1 19.0283 42.2013 14.3938 38.4038 10.5963C34.6063 6.79875 29.9717 4.9 24.5 4.9C19.0283 4.9 14.3938 6.79875 10.5963 10.5963C6.79875 14.3938 4.9 19.0283 4.9 24.5C4.9 29.9717 6.79875 34.6063 10.5963 38.4038C14.3938 42.2013 19.0283 44.1 24.5 44.1Z"
        fill="#E8EAED"
      />
    </svg>
  );
};
