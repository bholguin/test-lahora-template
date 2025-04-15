import {FC, ReactNode} from 'react';
import styles from './styles.module.css';

type Props = {
    children: ReactNode;
}

export const ContentLayout2: FC<Props> = ({children}) => {
  return (
    <div
      className={`content-layout-2 ${styles.content}`}
    >
      {children}
    </div>
  );
};
