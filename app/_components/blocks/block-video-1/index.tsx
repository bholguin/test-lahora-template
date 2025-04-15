import {VideoResponseData} from '@/app/_setup/types/services';
import {ContentLayout1} from '../../client-components/content-layout-1';
import Section from '../../client-components/section';
import {Videos1} from '../../client-components/videos/videos-1';
import {FC} from 'react';
import styles from './styles.module.css';

type Props = {
  videos: Array<VideoResponseData>;
};

export const VideoBlock1: FC<Props> = (props) => {
  const {videos} = props;
  return (
    <div className={styles.content}>
      <ContentLayout1>
        <Section title='Videos' variant='secundary' isTitle>
          <div className={styles.videoContent}>
            <Videos1 video={videos[0]}/>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              {
                videos.slice(1).map((item, index) => (
                  <Videos1 size='small' video={item} key={`video-small-${index}`}/>
                ))
              }
            </div>
          </div>
        </Section>
      </ContentLayout1>
    </div>
  );
};
