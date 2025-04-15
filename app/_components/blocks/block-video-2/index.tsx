import {VideoResponseData} from '@/app/_setup/types/services';
import {ContentLayout1} from '../../client-components/content-layout-1';
import Section from '../../client-components/section';
import {Videos2} from '../../client-components/videos/videos-2/indes';
import {FC} from 'react';
import {cutString} from '@/app/_setup/helpers/cutString';
import {formatDate} from '@/app/_setup/helpers/dateFormat';
import styles from './styles.module.css';

type Props = {
  video: VideoResponseData;
};

export const VideoBlock2: FC<Props> = (props) => {
  const getAutorDescription = () => {
    if (props?.video.main.author) {
      return `${props?.video.main.author} - ${formatDate(props.video.info.date.created)}`;
    } else {
      return props?.video.main.author;
    }
  };

  return (
    <div className={styles.content}>
      <ContentLayout1>
        <Section title="Videos" variant="secundary" isTitle>
          <div className={styles.videoContent}>
            <Videos2 video={props.video}/>
            <div className={styles.articleSection}>
              <a
                className={styles.title}
                href={props.video.info.link.url}
                target={props.video.info.link.target}
              >
                {props.video.main.title}
              </a>
              <p className={styles.article}>
                {cutString(props.video.main.description)}
              </p>
              <p className={styles.correspondent}>
                {getAutorDescription()}
              </p>
            </div>
          </div>
        </Section>
      </ContentLayout1>
    </div>
  );
};
