import {FC, ReactNode} from 'react';
import Section from '../../client-components/section';
import {SectionCard} from '../../client-components/cards/section-card-1';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import styles from './styles.module.css';

interface BlockNews1Props {
  title: string;
  titleUrl?: string;
  news: Array<NewListResponseData>;
  share?: boolean;
  showSubtitle?: boolean;
  rounded?: boolean;
  banner?: ReactNode;
}

const BlockNews1: FC<BlockNews1Props> = (props) => {
  const {news, title} = props;
  return (
    <Section title={title} titleUrl={props.titleUrl}>
      <div className={styles.newsContent}>
        {props.banner && (
          <div style={{order: 4}}>{props.banner}</div>
        )}
        {news.map((item, index) => (
          <div style={{order: index}} key={index}>
            <SectionCard
              {...item}
              rounded={props.rounded}
              showSubtitle={props.showSubtitle}
              share={props.share}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default BlockNews1;
