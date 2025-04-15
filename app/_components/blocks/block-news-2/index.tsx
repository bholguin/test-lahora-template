import {FC} from 'react';
import Section from '../../client-components/section';
import {SectionCard} from '../../client-components/cards/section-card-1';
import Image, {ImageProps} from '../../client-components/image';
import {BlockHead} from '../../client-components/block-head';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import styles from './styles.module.css';

interface BlockNews2Props extends Omit<ImageProps, 'preview'> {
  title: string;
  titleUrl?: string;
  mainNew: NewListResponseData;
  news: Array<NewListResponseData>;
  goTo?: {
    url: string;
    description: string;
  };
}

const BlockNews2: FC<BlockNews2Props> = (props) => {
  const {news, title, isVideo, rounded, mainNew} = props;

  return (
    <Section title={title} titleUrl={props.titleUrl}>
      <div className={styles.headerSection}>
        <BlockHead mainNew={props?.mainNew} goTo={props.goTo} />
        <a
          href={mainNew?.info?.link?.url}
          target={mainNew?.info?.link?.target}
        >
          <Image
            preview={props.mainNew?.preview}
            isVideo={isVideo}
            rounded={rounded}
          />
        </a>
      </div>
      <div className={styles.newsContent}>
        {Array.isArray(news) &&
          news.map((item, index) => (
            <SectionCard
              key={index}
              {...item}
              isVideo={isVideo}
              rounded={rounded}
              fontSizeTitle='18px'
              lineHeightTitle='24px'
            />
          ))}
      </div>
    </Section>
  );
};

export default BlockNews2;
