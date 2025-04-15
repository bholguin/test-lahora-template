import {FC} from 'react';
import Section from '../../client-components/section';
import {SectionCard4} from '../../client-components/cards/section-card-4';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import styles from './styles.module.css';

interface BlockNews1Props {
  title: string;
  news: Array<NewListResponseData>;
  share?: boolean;
  showSubtitle?: boolean;
}

const BlockNews4: FC<BlockNews1Props> = (props) => {
  const {news, title} = props;
  const formatResponse = (item: NewListResponseData): NewListResponseData => {
    return {
      ...item,
      info: {
        ...item.info,
        section: undefined,
      },
      config: undefined,
    };
  };
  return (
    <Section title={title}>
      <div className={styles.content}>
        {news.map((item, index) => (
          <SectionCard4
            key={index}
            {...formatResponse(item)}
            showSubtitle={props.showSubtitle}
            share={props.share}
          />
        ))}
      </div>
    </Section>
  );
};

export default BlockNews4;
