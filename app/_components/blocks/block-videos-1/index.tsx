import {FC} from 'react';
import Section from '../../client-components/section';
import {SectionCard} from '../../client-components/cards/section-card-1';
import Image, {ImageProps} from '../../client-components/image';
import {BlockHead} from '../../client-components/block-head';
import {VideoResponseData} from '@/app/_setup/types/services';
import {becomeVideoObject} from '@/app/_setup/helpers/becomeVideoObject';
import styles from './styles.module.css';

interface BlockVideos1Props extends Omit<ImageProps, 'preview'> {
  title: string;
  titleUrl?: string;
  mainVideo: VideoResponseData;
  videos: Array<VideoResponseData>;
  goTo?: {
    url: string;
    description: string;
  };
}

const BlockVideos1: FC<BlockVideos1Props> = (props) => {
  const {videos, title, isVideo, rounded, mainVideo} = props;

  return (
    <Section title={title} titleUrl={props.titleUrl}>
      <div className={styles.headerSection}>
        <BlockHead
          goTo={props.goTo}
          mainNew={becomeVideoObject(mainVideo)}
        />
        <a href={mainVideo?.info?.link.url} target={mainVideo?.info?.link.target} aria-label='Video'>
          <Image
            preview={{
              sizes: mainVideo?.main?.image.sizes,
              description: mainVideo?.main?.image.description,
            }}
            isVideo={isVideo}
            rounded={rounded}
            isLarge
          />
        </a>
      </div>
      <div className={styles.newsContent}>
        {Array.isArray(videos) && videos.map((item, index) => (
          <SectionCard
            {...becomeVideoObject(item)}
            key={index}
            isVideo={isVideo}
            rounded={rounded}
            fontSizeTitle='20px'
            lineHeightTitle='26px'
          />
        ))}
      </div>
    </Section>
  );
};

export default BlockVideos1;
