import {FC, SVGProps} from 'react';

export const Email: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="24"
      height="19"
      viewBox="0 0 24 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.8752 0.195801H2.96092C1.76664 0.195801 0.671875 1.19104 0.671875 2.48485V15.9206C0.671875 17.1149 1.66711 18.2096 2.96092 18.2096H20.8752C22.0695 18.2096 23.1643 17.2144 23.1643 15.9206V2.48485C23.1643 1.19104 22.0695 0.195801 20.8752 0.195801Z"
        fill="black"
      />
      <path
        d="M20.8752 4.67439L12.0176 10.2477L2.96094 4.67439V2.48486L12.0176 7.95868L20.8752 2.48486V4.67439Z"
        fill="white"
      />
    </svg>
  );
};
