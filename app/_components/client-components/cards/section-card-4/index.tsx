import {FC} from 'react';
import Image, {ImageProps} from '../../image';
import {NewsDescriptionProps} from '../../news-description';
import styles from './styles.module.css';

export interface SectionCardProps extends Omit<NewsDescriptionProps, 'preview'>,
ImageProps {}

export const SectionCard4: FC<SectionCardProps> = (props) => {
  const {rounded, isVideo} = props;

  return (
    <div className={styles.content}>
      <Image
        preview={props.preview}
        rounded={rounded}
        isVideo={isVideo}
      />
      <div className={styles.newsDescriptionContent}>
        <a
          href={props?.info?.link?.url}
          target={props?.info?.link?.target}
        >
          <p className={styles.title}>
            {props.main?.title?.section}
          </p>
        </a>
      </div>
    </div>
  );
};
