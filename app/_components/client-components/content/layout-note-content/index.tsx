import {FC, ReactNode} from 'react';
import {Readest} from '../../readest';
import {ItemList, NewListResponseData} from '@/app/_setup/types/new-list-response';
import {TimeLine} from '../../time-line';
import styles from './styles.module.css';

type Props = {
  children: ReactNode;
  bannerTop: ReactNode;
  banner: ReactNode;
  ranking: Array<NewListResponseData>;
  complement: ReactNode;
    itemList: Array<ItemList>;
    pageProps: { slug: string; news: string };
};

export const LayoutNotesComponent: FC<Props> = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.note}>
        {props.children}
      </div>
      <div className={styles.commercial}>
        <div className={styles.commercialContent}>
          {props.pageProps.slug === 'liveblog' && <TimeLine itemList={props.itemList}/>}
          {props.bannerTop}
          <Readest ranking={props.ranking} title="Más Leídas" />
          <div style={{position: 'sticky', top: '110px'}}>
            {props.banner}
          </div>
        </div>
      </div>
      <div className={styles.complement}>
        {props.complement}
      </div>
    </section>
  );
};
