import {FC} from 'react';
import {SectionCard} from '../../client-components/cards/section-card-1';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import {OpinionCard2} from '../../client-components/cards/opinio-card-2';
import {SectionCard5} from '../../client-components/cards/section-card-5';
import {EditorialBlock} from '../../blocks/editorial-block-1';
import styles from './styles.module.css';

type Props = {
  option: string;
  item: NewListResponseData;
};

export const SectionCardServerComponent: FC<Props> = (props) => {
  const {item, option} = props;

  switch (option) {
  case 'ediciones':
    return <div className={styles.ItemCustomContent}>
      <SectionCard5 showNewsLikeTitle {...item} />
    </div>;
  case 'columnistasnacionales':
    return <div className={styles.ItemCustomContent}>
      <OpinionCard2 data={item} />
    </div>;
  case 'columnistaslocales':
    return <div className={styles.ItemCustomContent}>
      <OpinionCard2 data={item} />
    </div>;
  case 'columnistas':
    return <div className={styles.ItemCustomContent}>
      <OpinionCard2 data={item} />
    </div>;
  case 'editorial':
    return <div className={styles.ItemCustomContent}>
      <EditorialBlock {...item} showSubtitle showTitle={false}/>
    </div>;
  default:
    return <div className={styles.ItemCustomContent}>
      <SectionCard {...item} rounded />
    </div>;
  }
};
