import {FC, ReactNode} from 'react';

type Props = {
    children: ReactNode
    show: boolean
}
export const ShowSection: FC<Props> = (props) => {
  const {children, show} = props;
  return show && <>{children}</>;
};
