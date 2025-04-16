'use client'; // Axios Api
import {getEnvironmentUrlFront} from '@/app/_setup/helpers/getEnviromentUrl';
import {
  NewListResponse,
  NewListResponseData,
} from '@/app/_setup/types/new-list-response';
import axios from 'axios';
import {FC, ReactNode, useCallback, useEffect, useState} from 'react';

type Props = {
  section: string;
  currentNews: NewListResponseData;
  banner?: ReactNode;
};

export const MasNoticias: FC<Props> = ({section, currentNews, banner}) => {
  const [news, setNews] = useState<NewListResponse>();
  const getNews = useCallback(async () => {
    try {
      const response = await axios.get<NewListResponse>(
        `${getEnvironmentUrlFront()}/hit/5.0/1/news-list-section`,
        {
          params: {
            size: 6,
            newstype: 'news,listas,liveblog',
            section,
            imagesizes: 'w:343,h:193,t:2',
            publication: 27,
          },
          headers: {
            'Content-Type': 'application/json',
            'x-api-token': 'wj5oeACJStV3exBvodMa',
          },
        }
      );
      setNews({
        ...response.data,
        data: response.data.data.filter(
          (item) => item.info.link.internal !== currentNews.info.link.internal
        ).slice(0, 5) || [],
      });
    } catch (e) {
      console.log(e);
      setNews(undefined);
    }
  }, [section, currentNews]);

  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    news?.data &&
    news.data.length > 0 && (
      <BlockNews1 news={news.data} title="Más Noticias" showSubtitle rounded banner={banner} />
    )
  );
};

import blockNewsStyles from '@/app/_components/blocks/block-news-1/styles.module.css';
import section1Styles from '@/app/_components/client-components/cards/section-card-1/styles.module.css';
import newsDescStyles from '@/app/_components/client-components/news-description/styles.module.css';
import {ImageClient} from '../noticias-relacionadas';
import {SectionCardProps} from '@/app/_components/client-components/cards/section-card-1';
import {NewsDescriptionProps} from '@/app/_components/client-components/news-description';
import {formatDate} from '@/app/_setup/helpers/dateFormat';
import {Dots} from '@/app/_assets/icons/Dots';
import {cutString} from '@/app/_setup/helpers/cutString';

interface BlockNews1Props {
  title: string;
  titleUrl?: string;
  news: Array<NewListResponseData>;
  share?: boolean;
  showSubtitle?: boolean;
  rounded?: boolean;
  banner?: ReactNode;
}

const BlockNews1 = (props: BlockNews1Props) => {
  const news = props.news;
  return <div className={blockNewsStyles.newsContent}>
    {props.banner && (
      <div style={{order: 4}}>{props.banner}</div>
    )}
    {news.map((item: SectionCardProps, index) => {
      const {
        main,
        authors,
        info,
        preview,
        variant,
        isVideo,
        config,
        overImage = 'default',
        hasShadow,
        isTitle,
        isLarge,
      } = item;

      return <div style={{order: index}} key={index}>
        <section className={section1Styles.content}>
          <a title={main?.title?.section} href={info?.link?.url} target={info?.link?.target}>
            <ImageClient
              preview={preview}
              rounded={props.rounded}
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
            share={props.share}
            config={config}
            overImage={overImage}
            showSubtitle={props.showSubtitle}
            variant={variant}
            isTitle={isTitle}
            fontSizeTitle={item.fontSizeTitle}
            lineHeightTitle={item.lineHeightTitle}
            fontSizeTitleMobile={item.fontSizeTitleMobile}
            lineHeightTitleMobile={item.lineHeightTitleMobile}
          />
        </section>
      </div>;
    }
    )}
  </div>;
};


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
    <div className={newsDescStyles.boxInformation}
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
      {share && <Dots className={newsDescStyles.dotStyles} />}
      {props?.info?.section?.url && (
        <a className={newsDescStyles.sectionDescription}
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
        className={newsDescStyles.articule}
      >
        <a
          className={newsDescStyles.linkStyled}
          style={{'color': variantColors[variant], '--isLink': props?.info?.link?.url ? 'underline' : 'none'} as React.CSSProperties}
          href={props?.info?.link?.url}
          target={props?.info?.link?.target}
        >
          {props.main?.title?.section}
        </a>
      </h2>
      {props.config?.showsubtitle && showSubtitle && (
        <p
          className={newsDescStyles.description}
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
              className={newsDescStyles.correspondentLink}
              href={`/autor/${props?.authors[0]?.name}`}
              style={{color: variant !== 'contained' ? 'var(--grey-400)' : 'var(--common-white)'}}
            >
              {getAutorDescription()}
            </a>
          ) : (
            <div
              className={newsDescStyles.correspondent}
              style={{color: variant !== 'contained' ? 'var(--grey-400)' : 'var(--common-white)'}}>
              {getAutorDescription()}
            </div>
          )}
        </>
      )}
    </div>
  );
};
