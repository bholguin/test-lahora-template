
import {FC} from 'react';
import styles from './styles.module.css';
import Image, {ImageProps} from '../../image';
import {NewsDescriptionProps} from '../../news-description';
import {cutString} from '@/app/_setup/helpers/cutString';

export interface SectionCardProps
  extends Omit<NewsDescriptionProps, 'preview'>,
  ImageProps { }

export const SectionCard2: FC<SectionCardProps> = (props) => {
  const {rounded, isVideo, info, main, overImage = 'default'} = props;

  return (
    <section className={styles.content}>
      <a
        title={main?.title?.section}
        href={info.link.url}
        target={info.link.target}
      >
        <Image preview={props.preview} rounded={rounded} isVideo={isVideo} />
      </a>
      <div className={styles.boxInformation} style={{
        width: overImage !== 'default' ? '90%':'100%',
        left: overImage === 'left' ? 0 : overImage === 'right' ? 'calc(10% - 1px)' : 'auto',
        top: overImage !== 'default' ? '-1rem' : 0,
      }}>
        {props?.info?.section && (
          <a
            className={styles.sectionDescription}
            href={props?.info?.section?.url}
          >
            {props?.info?.section?.name}
          </a>
        )}
        <h2
          className={styles.articule}
          style={
            {
              '--fontSizeTitle': props.fontSizeTitle || '20px',
              '--lineHeightTitle': props.lineHeightTitle || '26px',
            } as React.CSSProperties
          }
        >
          <a className={styles.linkStyled}
            href={props?.info?.link?.url}
            target={props?.info?.link?.target}
          >
            {cutString(props.main?.title?.section, overImage !== 'default' ? 60 : 95)}
          </a>
        </h2>
      </div>
    </section>
  );
};
