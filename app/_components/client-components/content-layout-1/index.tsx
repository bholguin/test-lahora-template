import {FC, ReactNode} from 'react';

type Props = {
    children: ReactNode;
    desktopWidth?: string;
    className?: string
}

export const ContentLayout1: FC<Props> = ({
  children,
  className,
  // desktopWidth = '1185px'
}) => {
  return (
    <div
      className={`content-layout-1 ${className ? className : ''}`}
    >
      {children}
    </div>
  );
};
