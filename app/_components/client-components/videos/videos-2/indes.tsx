import {FC} from 'react';
import {VideoResponseData} from '@/app/_setup/types/services';
import Image from '../../image';
import {Play} from '@/app/_assets/icons/Play';
import styles from './styles.module.css';

export const Videos2: FC<{ video: VideoResponseData }> = (props) => {
  const {video} = props;
  return (
    <a
      href={video.info.link.url ? video.info.link.url : undefined}
      target={video.info.link.target}
    >
      <section className={styles.container}>
        <Image
          isLarge
          preview={{
            sizes: video.main.image.sizes,
            description: video.main.description,
          }}/>
        <Play className={styles.playStyled} />
      </section>
    </a>
  );
};
