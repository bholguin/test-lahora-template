import {FC} from 'react';
import {
  SectionCard,
  SectionCardProps,
} from '../../client-components/cards/section-card-1';
import {
  NewDescriptionBlock,
  NewDescriptionBlockProps,
} from '../news-description-block-1';
// import {Styled} from './styles';
import styles from './styles.module.css';

export interface MainBlock1Props
  extends SectionCardProps,
    NewDescriptionBlockProps {}

export const MainBlock1: FC<MainBlock1Props> = (props) => {
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
    hasShadow,
  } = props;
  return (
    <section className={styles.content}>
      <SectionCard
        {...props}
        main={main}
        authors={authors}
        info={info}
        preview={preview}
        share={share}
        showSubtitle={showSubtitle}
        variant={variant}
        rounded={rounded}
        isVideo={isVideo}
        config={config}
        hasShadow={hasShadow}
        isTitle
        fontSizeTitleMobile="1.875rem"
        lineHeightTitleMobile='2.375rem'
      />
      <NewDescriptionBlock
        block={props.block}
        fontSizeTitle="18px"
        lineHeightTitle="24px"
      />
    </section>
  );
};
