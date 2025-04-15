import {FC} from 'react';
import {VideoResponseData} from '@/app/_setup/types/services';
import styles from './styles.module.css';
import {getImageUrl} from '@/app/_setup/helpers/imageEnvirontment';

type Props = {
  video: VideoResponseData;
  size?: 'longer' | 'small';
};

export const Videos1: FC<Props> = async (props) => {
  const {size = 'longer', video} = props;
  const srcImg = video.main.image.original.url;
  return (
    <figure className={styles.figure}>
      <span className={styles.backdrop}>
        <span className={styles.backDropAux} />
        <a
          href={video.info.link.url}
          target={video.info.link.target}
        >
          <div>
            {video.main.image.sizes.map(async (item, index) => {
              if (item.width >= 580) {
                return (
                  <source
                    media="(width >= 750px)"
                    srcSet={await getImageUrl(item.url)}
                    key={index}
                  />
                );
              } else {
                return (
                  <source
                    media="(width < 750px)"
                    srcSet={await getImageUrl(item.url)}
                    key={index}
                  />
                );
              }
            })}
            <img
              className={[styles.imageStyled, styles[size]].join(' ')}
              alt={''}
              src={
                srcImg ? await getImageUrl(srcImg) : ''
              }
            />
            {/*  <Styled.ContentNews>
              <Styled.TagContent>
                <Styled.Tag underline="none" href={""}>
                  {"seccion"}
                </Styled.Tag>
                <Styled.PlayStyled />
              </Styled.TagContent>
              <Styled.Titular size={size}>{video.main.title}</Styled.Titular>
            </Styled.ContentNews> */}
          </div>
        </a>
      </span>
    </figure>
  );
};
