import {FC, ReactNode} from 'react';
import {ContentLayout1} from '../../client-components/content-layout-1';
import styles from './styles.module.css';

type Props = {
  children: ReactNode;
};

export const ContentLayoutTema: FC<Props> = (props) => {
  return (
    <div className={styles.content}>
      <ContentLayout1 className={styles.contentLayout}>{props.children}</ContentLayout1>
    </div>
  );
};
