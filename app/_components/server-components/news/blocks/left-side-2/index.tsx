import {ImageNews2} from '@/app/_components/client-components/image-news-2';
import styles from './styles.module.css';
import {
  ItemList,
  NewListResponseData,
  SizeImage,
} from '@/app/_setup/types/new-list-response';
import {JournalistArticule3} from '@/app/_components/client-components/journalist-articule-3';
import {BannerResponse} from '@/app/_setup/types/services';
import {BlockNoteList} from '@/app/_components/blocks/block-note-list';
import {getImageUrl} from '@/app/_setup/helpers/imageEnvirontment';
import React from 'react';

type Props = {
  news: NewListResponseData;
  banners: Array<BannerResponse>;
  newsRelatedResponses?: Array<Array<NewListResponseData> | undefined>;
  itemList: Array<ItemList>;
  pageProps: { slug: string; news: string };
};

const replaceImageUrls = async (
  html: string,
  getImageUrl: (imageUrl: string) => Promise<string | undefined>
): Promise<string> => {
  const srcRegex = /<img[^>]+src="([^">]+)"/g;
  const matches = [...html.matchAll(srcRegex)];

  const replacements: Record<string, string> = {};

  for (const match of matches) {
    const originalUrl = match[1];
    const sizeImageMatch = html.includes(originalUrl) ?
      ({url: originalUrl, width: 0, height: 0} as SizeImage) :
      null;

    if (sizeImageMatch) {
      const newUrl = (await getImageUrl(sizeImageMatch.url)) || '';
      replacements[originalUrl] = newUrl;
    }
  }

  return html.replace(
    srcRegex,
    (_, url) => `<img src="${replacements[url] || url}"`
  );
};

const insertBanners = (html: string, banners: Array<BannerResponse>) => {
  const bannerPositions: { [key: number]: number } = {
    1: 1,
    3: 2,
    6: 3,
    9: 4,
    12: 5,
  };
  let index = 0;
  return html.replace(/(<p>.*?<\/p>)/g, (match) => {
    index++;
    const banner = banners.find(
      (b) => b.key === `rectangle_${bannerPositions[index]}`
    );
    return banner ? `${match}${banner.value}` : match;
  });
};

const insertRelatedNews = async (
  html: string,
  newsRelatedResponses:
    | Array<Array<NewListResponseData> | undefined>
    | undefined,
  getImageUrl: (imageUrl: string) => Promise<string | undefined>
): Promise<string> => {
  if (!newsRelatedResponses) return html;

  const spanRegex = /<span data-src="(.*?)"><\/span>/g;
  const matches = [...html.matchAll(spanRegex)];

  let newHtml = html;

  for (const match of matches) {
    const fullMatch = match[0];
    const src = match[1];

    const itemNews = newsRelatedResponses.find((item) =>
      src.includes(item?.[0]?.info.link.internal || '')
    );

    if (!itemNews || !itemNews[0]) continue;

    const imageSize = itemNews[0].preview?.sizes?.[0];
    const imageUrl = imageSize ? await getImageUrl(imageSize.url) : '';
    const sectionUrl = itemNews[0].info.section?.url ?? '#';
    const sectionName = itemNews[0].info.section?.name ?? 'Sección';
    const titleUrl = itemNews[0].info.link?.url ?? '#';
    const title = itemNews[0].main?.title.article ?? 'Título';

    // related news source image
    const sources = (
      await Promise.all(
        itemNews[0].preview?.sizes?.map(async (item) => {
          const url = await getImageUrl(item.url);
          if (item.width < 200) {
            return `<source srcset="${url}" media="(width < 750px)"/>`;
          } else {
            return `<source srcset="${url}" media="(width >= 750px)"/>`;
          }
        })
      )
    ).reduce((acc, val) => (acc += val), '');

    const replacement = `
      <span data-src="${src}">
        <picture style='display: flex'>
        ${sources}
          <img src="${imageUrl}" alt="Imagen relacionada" />
        </picture>
        <div>
          <a class="section" href="${sectionUrl}">${sectionName}</a>
          <a class="title" href="${titleUrl}">${title}</a>
        </div>
      </span>
    `;

    newHtml = newHtml.replace(fullMatch, replacement);
  }

  return newHtml;
};

export async function RigthSide2(props: Props) {
  const {news, banners, newsRelatedResponses, pageProps, itemList} = props;
  let processedHtml = news?.body?.rendered ?? '';
  processedHtml = await replaceImageUrls(processedHtml, getImageUrl);
  processedHtml = insertBanners(processedHtml, banners);
  processedHtml = await insertRelatedNews(
    processedHtml,
    newsRelatedResponses,
    getImageUrl
  );

  return (
    <div className={styles.content}>
      {pageProps.slug !== 'liveblog' && (
        <ImageNews2 preview={news.preview} rounded />
      )}
      <div className={styles.journalistArticleContent}>
        <JournalistArticule3 news={news} />
      </div>
      <div
        className={styles.contentNews}
        style={{slug: pageProps.slug} as React.CSSProperties}
        id="content-news-section"
        dangerouslySetInnerHTML={{__html: processedHtml}}
      />
      <BlockNoteList itemList={itemList} pageProps={pageProps} />
    </div>
  );
}
