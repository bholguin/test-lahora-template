import {ItemList} from '@/app/_setup/types/new-list-response';
import {FC} from 'react';
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import styles from './styles.module.css';

type Props = {
  itemList: Array<ItemList>;
};

export const TimeLine: FC<Props> = (props) => {
  return (
    <section className={styles.content}>
      {props.itemList[0].list.items.map((item, index) => (
        <div className={styles.contentLine} key={index}>
          <a className={styles.dateLink} href={`#${item.date}`}>
            {dayjs(item.date)
              .locale('es')
              .format('MM/DD/YYYY [•] hh:mm [HS]')}
          </a>
          <div className={styles.contentText}>
            {props.itemList[0].list.integrated ?
              item.title :
              `${item.index}. ${item.title}`}
          </div>
        </div>
      ))}
    </section>
  );
};
