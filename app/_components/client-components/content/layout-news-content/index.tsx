import {FC, ReactNode} from 'react';
import {Readest} from '../../readest';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import styles from './styles.module.css';

type Props = {
    children: ReactNode
    banner: ReactNode
    ranking: Array<NewListResponseData>
}

export const LayoutNewsComponent: FC<Props> = (props) => {
  return (
    <section className={styles.content}>
      {props.children}
      <div className={styles.bannerSection}>
        {props.banner}
        <Readest ranking={props.ranking} title='Más Leídas'/>
      </div>
    </section>
  );
};
