import {VideoResponseData} from '@/app/_setup/types/services';
import {ContentLayout1} from '../../client-components/content-layout-1';
import {FC} from 'react';
import {cutString} from '@/app/_setup/helpers/cutString';
import {formatDate} from '@/app/_setup/helpers/dateFormat';
import styles from './styles.module.css';

type Props = {
  video: VideoResponseData;
  type: string;
};

export const VideoBlock3: FC<Props> = (props) => {
  const getAutorDescription = () => {
    if (props?.video.main.author) {
      return `${props?.video.main.author} - ${formatDate(
        props.video.info.date.created
      )}`;
    } else {
      return props?.video.main.author;
    }
  };
  return (
    <div className={styles.content}>
      <ContentLayout1>
        <div className={styles.videoContent}>
          <p className={styles.title}>{props.video.main.title}</p>
          {props.type === 'vy' && <iframe className={styles.iframeStyled}
            src={`https://www.youtube.com/embed/${props.video.main.code}`}
            frameBorder="0"
            allowFullScreen
          />}
          {props.type === 'vf' && <iframe className={styles.iframeStyled}
            src={props.video.main.code}
            frameBorder="0"
            allowFullScreen
          />}
          {props.type === 've' && <div className={styles.contentFrame} dangerouslySetInnerHTML={{__html: props.video.main.code}}/>}
          <div className={styles.articleSection}>
            <p className={styles.article}>
              {cutString(props.video.main.description)}
            </p>
            <p className={styles.correspondent}>{getAutorDescription()}</p>
          </div>
        </div>
      </ContentLayout1>
    </div>
  );
};
