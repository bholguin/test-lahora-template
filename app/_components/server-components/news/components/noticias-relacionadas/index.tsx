'use client'; // Axios Api
import {SectionCardProps} from '@/app/_components/client-components/cards/section-card-1';
// import {SectionCard2} from '@/app/_components/client-components/cards/section-card-2';
import {CustomCarousel} from '@/app/_components/client-components/carousel';
import {cutString} from '@/app/_setup/helpers/cutString';
// import Section from '@/app/_components/client-components/section';
import {getEnvironmentUrlFront} from '@/app/_setup/helpers/getEnviromentUrl';
import {NewListResponse} from '@/app/_setup/types/new-list-response';
import axios from 'axios';
import styles from '@/app/_components/client-components/cards/section-card-2/styles.module.css';
import styles2 from '@/app/_components/client-components/image/styles.module.css';
import {FC, useCallback, useEffect, useMemo, useState} from 'react';

type Props = {
  path: string;
};

export const RelatedNews: FC<Props> = ({path}) => {
  const [news, setNews] = useState<NewListResponse>();
  const getNews = useCallback(async () => {
    try {
      const formatPath = path.split('/').join('|');
      const response = await axios.get<NewListResponse>(
        `${getEnvironmentUrlFront()}/hit/5.0/1/news-items-related`,
        {
          params: {
            size: 10,
            path: formatPath,
            publication: 27,
            imagesizes: 'w:343,h:185,t:2',
            exclude:
              'keywords,gallery,related,relatedexternal,external,customfields',
          },
          headers: {
            'Content-Type': 'application/json',
            'x-api-token': 'wj5oeACJStV3exBvodMa',
          },
        }
      );
      setNews(response.data);
    } catch (e) {
      console.log(e);
      setNews(undefined);
    }
  }, [path]);

  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    news?.data &&
    news.data.length > 0 && (
      <CustomCarousel
        additionalTransfrom={0}
        arrows={true}
        centerMode={false}
        draggable={true}
        focusOnSelect={false}
        infinite={false}
        keyBoardControl
        minimumTouchDrag={60}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
      >
        {Array.isArray(news?.data) &&
            news?.data.map((item, index) => (
              <div key={index}>
                <SectionCard2 {...item} variant="contained" />
              </div>
            ))}
      </CustomCarousel>
    )
  );
};


const SectionCard2: FC<SectionCardProps> = (props) => {
  const {rounded, isVideo, info, main, overImage = 'default'} = props;

  return (
    <section className={styles.content}>
      <a
        title={main?.title?.section}
        href={info.link.url}
        target={info.link.target}
      >
        <ImageClient preview={props.preview} rounded={rounded} isVideo={isVideo} />
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

import {Preview} from '@/app/_setup/types/new-list-response';
import {getImageUrl} from '@/app/_setup/helpers/imageEnvirontment';
import {Play} from '@/app/_assets/icons/Play';

export interface ImageProps {
  preview: Preview;
  isVideo?: boolean;
  rounded?: boolean;
  isLarge?: boolean;
  hasShadow?: boolean;
  BackDropAuxHeigthMobile?: string;
}

export const ImageClient: FC<ImageProps> = (props) => {
  const {
    rounded = false,
    isVideo = false,
    isLarge = false,
    hasShadow = false,
    BackDropAuxHeigthMobile,
  } = props;

  const images = useMemo(() => props?.preview?.sizes || [], [props?.preview?.sizes]);

  const [imageUrls, setImageUrls] = useState<Array<string | undefined>>([]);
  const [mainImageUrl, setMainImageUrl] = useState<string>('');

  useEffect(() => {
    const loadImages = async () => {
      if (!images.length) return;

      const urls = await Promise.all(images.map((img) => getImageUrl(img.url)));
      setImageUrls(urls);

      if (props?.preview?.original && images[0]) {
        const mainUrl = await getImageUrl(images[0].url);
        setMainImageUrl(mainUrl ?? '');
      }
    };

    loadImages();
  }, [images, props?.preview?.original]);

  if (!images.length) return null;

  const renderSources = () => {
    return images.map((item, index) => {
      const srcSet = imageUrls[index];

      if (!srcSet) return null;

      if (isLarge) {
        if (item.width >= 580) {
          return (
            <source
              media="(width >= 750px)"
              srcSet={srcSet}
              key={index}
            />
          );
        } else {
          return (
            <source
              media="(width < 750px)"
              srcSet={srcSet}
              key={index}
            />
          );
        }
      } else {
        if (item.width < 580) {
          return (
            <source
              srcSet={srcSet}
              key={index}
            />
          );
        }
      }

      return null;
    });
  };

  return (
    <figure className={styles2.figure}>
      <span
        className={styles2.backdrop}
        style={{borderRadius: rounded ? '12px' : '0'}}
      >
        <span
          className={styles2.backdropAux}
          style={{
            borderRadius: rounded ? '10px' : '0',
            height: BackDropAuxHeigthMobile || '56.25%',
          }}
        />
        <picture>
          {images.length > 1 && renderSources()}
          <img
            className={styles2.imageStyled}
            alt={props.preview?.description || ''}
            src={mainImageUrl}
            style={{
              borderRadius: rounded ? '10px' : '0',
              boxShadow: hasShadow ? '0px 4px 8px 0px #00000033' : '0px',
            }}
          />
          {isVideo && (
            <>
              <div
                className={styles2.boxPlayIcon}
                style={{height: isLarge ? '40%' : '72px'}}
              />
              <Play
                className={styles2.playStyled}
                style={{
                  width: isLarge ? '3rem' : '27px',
                  height: isLarge ? '3rem' : '27px',
                  marginBottom: isLarge ? '18px' : '.5rem',
                  marginLeft: isLarge ? '30px' : '.5rem',
                }}
              />
            </>
          )}
        </picture>
      </span>
    </figure>
  );
};
