import {FC, ReactNode} from 'react';
import styles from './styles.module.css';

type Props = {
    children: ReactNode
}

export const LayoutNewsComponent: FC<Props> = (props) => {
  return (
    <div className={styles.layoutNewsContent}>
      {props.children}
    </div>
  );
};
