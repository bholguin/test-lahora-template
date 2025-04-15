import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import {NewDescriptionBlock} from '../../blocks/news-description-block-1';
import styles from './styles.module.css';
import {FC} from 'react';

type Props = {
  title: string
  ranking: Array<NewListResponseData>;
};

export const Readest: FC<Props> = (props) => {
  let list: Array<NewListResponseData> = [];

  if (props.ranking) {
    list = props.ranking.map((item) => ({
      ...item,
      config: {
        zonehome: undefined,
        priorityhome: '',
        zonesection: 'no_mostrar',
        prioritysection: ',',
        homepreview: 'imagen',
        showcomments: false,
        showtime: false,
        showauthor: false,
        showuppertitle: false,
        showsubtitle: false,
        showads: false,
      },
    }));
  }

  return Array.isArray(props.ranking) && (
    <section className={styles.content}>
      <p className={styles.titulo}>{props.title}</p>
      <NewDescriptionBlock
        block={list}
        showImg
        fontSizeTitle='16px'
        lineHeightTitle='22px'
        fontSizeTitleMobile='16px'
        lineHeightTitleMobile='22px'
      />
    </section>
  );
};
