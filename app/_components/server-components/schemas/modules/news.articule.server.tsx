import {config} from '@/app/_setup/config/client';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import Script from 'next/script';

function convertTimezoneShiftToOffset(shift: number) {
  const offsetHours = Math.abs(shift);
  const hours = String(Math.floor(offsetHours)).padStart(2, '0');
  const minutes = String((offsetHours - Math.floor(offsetHours)) * 60).padStart(
    2,
    '0'
  );

  const sign = shift >= 0 ? '+' : '-';
  return `${sign}${hours}${minutes}`;
}

const timezoneShift = config.timezone * 1000 * 60 * 60;
const timezoneShiftString = convertTimezoneShiftToOffset(config.timezone);

const NewsArticle = ({newsData}: { newsData: NewListResponseData }) => {
  const schemaImages = newsData?.preview?.sizes ?
    newsData?.preview?.sizes.map((size) => {
      return config.siteUrl + size?.url;
    }) :
    [];
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'NewsArticle',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': newsData?.info?.link?.canonical ?
        newsData?.info?.link?.canonical :
        '',
    },
    'headline': newsData?.main?.title?.article ?
      newsData?.main?.title?.article :
      '',
    'image': schemaImages,
    'datePublished': new Date(newsData?.info?.date?.firstpublish + timezoneShift)
      .toISOString()
      .replace('Z', timezoneShiftString),
    'dateModified': new Date(newsData?.info?.date?.lastpublish + timezoneShift)
      .toISOString()
      .replace('Z', timezoneShiftString),
    'dateCreated': new Date(newsData?.info?.date?.firstpublish + timezoneShift)
      .toISOString()
      .replace('Z', timezoneShiftString),
    'author': {
      '@type': 'Persons',
      'data': [] /* newsData?.authors.map((author: any) => ({ //este objeto debe ser visado
        url:
          config.siteUrl +
          (author[0]?.internaluser ? "/autor/" + author[0]?.name : ""),
        name: author[0]?.name,
      })), */,
    },
    'publisher': {
      '@type': 'Organization',
      'name': config.name,
      'url': config.siteUrl,
      'logo': {
        '@type': 'ImageObject',
        'url': config.siteUrl + '/export/sites/velok/arte/apps/amp_60.png',
        'width': '305',
        'height': '60',
      },
    },
    'articleSection': newsData?.info?.section?.name,
    'url': newsData?.info?.link?.canonical ? newsData?.info?.link?.canonical : '',
    'description': newsData?.main?.subtitle?.striped ?
      newsData?.main?.subtitle?.striped :
      '',
    'keywords':
      newsData?.main?.tags?.length > 0 ?
        newsData?.main?.tags?.map((tag) => tag.name).join(', ') :
        '',
  };
  return (
    <Script
      id="NewsArticleSchema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
    />
  );
};

export default NewsArticle;
