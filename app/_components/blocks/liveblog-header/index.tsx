import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import {FC} from 'react';
import {ImageNews2} from '../../client-components/image-news-2';
import styles from './styles.module.css';

type Props = {
  isTitle?: boolean;
  fontSizeTitle?: string;
  lineHeightTitle?: string;
  fontSizeSubTitle?: string;
  lineHeightSubTitle?: string;
  fontSizeTitleMobile?: string;
  lineHeightTitleMobile?: string
} & NewListResponseData;

export const LiveBlogHeader: FC<Props> = (props) => {
  return (
    <>
      <div className={styles.boxInformation}>
        <div className={styles.contentBox}>
          {props?.info?.section && (
            <a
              className={styles.sectionDescription}
              href={props?.info?.section?.url}
            >
              {props?.info?.section?.name}
            </a>
          )}
          <div className={styles.liveBox}>EN VIVO</div>
        </div>

        <h2
          className={styles.articule}
          style={{
            'fontSize': props.fontSizeTitle || '26px',
            'lineHeight': props.lineHeightTitle || '20px',
            '--fontSizeTitle': props.fontSizeTitle,
            '--lineHeightTitle': props.lineHeightTitle,
            '--fontSizeTitleMobile': props.fontSizeTitleMobile,
            '--lineHeightTitleMobile': props.lineHeightTitleMobile,
          } as React.CSSProperties}
        >
          <a
            className={styles.linkStyled}
            href={props?.info?.link?.url}
            target={props?.info?.link?.target}
          >
            {props.main?.title?.section}
          </a>
        </h2>
        {props.config?.showsubtitle && (
          <div
            className={styles.description}
            style={{
              'fontSize': props.fontSizeTitle || '16px',
              'lineHeight': props.lineHeightTitle || '22px',
              '--fontSizeSubTitle': props.fontSizeSubTitle,
              '--lineHeightSubTitle': props.lineHeightSubTitle,
            }as React.CSSProperties}
          >
            {props.main.subtitle.striped}
          </div>
        )}
        <ImageNews2 preview={props.preview} rounded />
      </div>
    </>
  );
};
