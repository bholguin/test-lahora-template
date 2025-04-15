import {FC, SVGProps} from 'react';

export const ChevronDown: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.862254 3.39448C1.1226 3.13413 1.54471 3.13413 1.80506 3.39448L6.00033 7.58974L10.1956 3.39448C10.4559 3.13413 10.878 3.13413 11.1384 3.39448C11.3987 3.65483 11.3987 4.07694 11.1384 4.33729L6.47173 9.00396C6.21138 9.26431 5.78927 9.26431 5.52892 9.00396L0.862254 4.33729C0.601905 4.07694 0.601905 3.65483 0.862254 3.39448Z"
        fill={props.fill ?? '#7B888A'}
      />
    </svg>
  );
};
