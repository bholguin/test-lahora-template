
import React, {FC} from 'react';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import {cutString} from '@/app/_setup/helpers/cutString';
import {formatDate} from '@/app/_setup/helpers/dateFormat';
import {Dots} from '@/app/_assets/icons/Dots';
import styles from './styles.module.css';

export type NewsDescriptionVariants = 'contained' | 'text' | 'primary';

export type NewsDescriptionProps = {
  fontSizeTitle?: string;
  lineHeightTitle?: string;
  fontSizeSubTitle?: string;
  lineHeightSubTitle?: string;
  fontSizeTitleMobile?: string
  lineHeightTitleMobile?: string
  colorSubTitle?: string;
  cutSubtitle?: boolean;
  variant?: NewsDescriptionVariants;
  overImage?: 'left' | 'right' | 'default'
  share?: boolean;
  showSubtitle?: boolean;
  isTitle?: boolean;
} & NewListResponseData;

const variantColors = {
  'contained': 'var(--common-white)',
  'text': 'var(--common-black)',
  'primary': 'var(--primary-main)',
};

const NewsDescription: FC<NewsDescriptionProps> = (props) => {
  const {
    variant = 'text',
    share = false,
    showSubtitle = false,
    overImage = 'default',
    cutSubtitle = true,
  } = props;

  const getAutorDescription = () => {
    if (props?.config?.showtime && props.config?.showauthor) {
      return `${props?.authors[0]?.fullname} - ${formatDate(
        props.info?.date?.modified
      )}`;
    } else if (props.config?.showauthor) {
      return props?.authors[0]?.fullname;
    } else if (props?.config?.showtime) {
      return formatDate(props.info?.date?.modified);
    }
  };

  const isContained = variant === 'contained';

  return (
    <div className={styles.boxInformation}
      style={{
        minHeight: isContained ? 200 : 'auto',
        padding: overImage !== 'default' ? '2rem' : isContained ? '1rem' : '0rem',
        width: overImage !== 'default' ? '90%!important' : '100%',
        backgroundColor: !isContained ? overImage !== 'default' ?
          'var(--common-white)' :
          'transparent' :
          'var(--primary-main)',
        border: !isContained || overImage === 'default' ?
          'none' :
          '1px solid #01fff6',
        left: overImage === 'left' ? 0 : overImage === 'right' ? 'calc(10% - 1px)' : 'auto',
        top: overImage !== 'default' ? '-10%' : 0,
      }}
    >
      {share && <Dots className={styles.dotStyles} />}
      {props?.info?.section?.url && (
        <a className={styles.sectionDescription}
          style={{color: variant === 'contained' ? 'var(--warning-light)' : 'var(--primary-main)'}}
          href={props?.info?.section?.url}
        >
          {props?.info?.section?.name}
        </a>
      )}
      <h2
        style={{
          '--fontSizeTitle': props.fontSizeTitle,
          '--lineHeightTitle': props.lineHeightTitle,
          '--fontSizeTitleMobile': props.fontSizeTitleMobile,
          '--lineHeightTitleMobile': props.lineHeightTitleMobile,
        } as React.CSSProperties}
        className={styles.articule}
      >
        <a
          className={styles.linkStyled}
          style={{'color': variantColors[variant], '--isLink': props?.info?.link?.url ? 'underline' : 'none'} as React.CSSProperties}
          href={props?.info?.link?.url}
          target={props?.info?.link?.target}
        >
          {props.main?.title?.section}
        </a>
      </h2>
      {props.config?.showsubtitle && showSubtitle && (
        <p
          className={styles.description}
          style={{
            '--fontSizeSubTitle': props.fontSizeSubTitle,
            '--lineHeightSubTitle': props.lineHeightSubTitle,
            '--colorSubTitle': props.colorSubTitle,
          } as React.CSSProperties}
        >
          {cutSubtitle ?
            cutString(props.main.subtitle.striped) :
            props.main.subtitle.striped}
        </p>
      )}
      {(props?.config?.showtime || props.config?.showauthor) && (
        <>
          {props.authors[0]?.internaluser ? (
            <a
              className={styles.correspondentLink}
              href={`/autor/${props?.authors[0]?.name}`}
              style={{color: variant !== 'contained' ? 'var(--grey-400)' : 'var(--common-white)'}}
            >
              {getAutorDescription()}
            </a>
          ) : (
            <div
              className={styles.correspondent}
              style={{color: variant !== 'contained' ? 'var(--grey-400)' : 'var(--common-white)'}}>
              {getAutorDescription()}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NewsDescription;
