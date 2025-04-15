import {FC} from 'react';
import styles from './styles.module.css';
import NewsDescription, {NewsDescriptionProps} from '../../news-description';
import Image, {ImageProps} from '../../image';
export interface SectionCardProps
  extends Omit<NewsDescriptionProps, 'preview'>,
    Omit<ImageProps, 'info'> {
      isLarge?: boolean
    }

export const SectionCard: FC<SectionCardProps> = (props) => {
  const {
    main,
    authors,
    info,
    preview,
    share,
    showSubtitle,
    variant,
    rounded,
    isVideo,
    config,
    overImage = 'default',
    hasShadow,
    isTitle,
    isLarge,
  } = props;

  return (
    <section className={styles.content}>
      <a title={main?.title?.section} href={info?.link?.url} target={info?.link?.target}>
        <Image
          preview={preview}
          rounded={rounded}
          isVideo={isVideo}
          hasShadow={hasShadow}
          isLarge={isLarge}
        />
      </a>
      <NewsDescription
        main={main}
        authors={authors}
        info={info}
        preview={preview}
        share={share}
        config={config}
        overImage={overImage}
        showSubtitle={showSubtitle}
        variant={variant}
        isTitle={isTitle}
        fontSizeTitle={props.fontSizeTitle}
        lineHeightTitle={props.lineHeightTitle}
        fontSizeTitleMobile={props.fontSizeTitleMobile}
        lineHeightTitleMobile={props.lineHeightTitleMobile}
      />
    </section>
  );
};
