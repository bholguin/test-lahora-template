import {config} from '@/app/_setup/config/client';
import arrayDestructuring from '@/app/_setup/helpers/arrayDestructuring';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import Script from 'next/script';

const BreadCrumbs = ({newsData}: { newsData: NewListResponseData }) => {
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': config.name.toLocaleUpperCase(),
        'item': config.siteUrl,
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': newsData?.info?.section?.name,
        'item': config.siteUrl + newsData?.info?.section?.url,
      },
    ],
  };
  if (
    newsData?.main?.tags &&
    newsData?.main?.tags.filter((tag) => tag.approved).length > 0
  ) {
    schema.itemListElement.push({
      '@type': 'ListItem',
      'position': schema.itemListElement.length + 1,
      'name':
        newsData?.main?.tags?.length > 0 ?
          arrayDestructuring(
            newsData?.main?.tags.filter((tag) => tag.approved),
            newsData?.main?.tags[0]
          )?.name :
          '',
      'item':
        config.siteUrl +
        '/' +
        (newsData?.main?.tags?.length > 0 ?
          arrayDestructuring(
            newsData?.main?.tags.filter((tag) => tag.approved),
            newsData?.main?.tags[0]
          )
            ?.name?.toLowerCase()
            .replaceAll(' ', '-') +
            '-t' +
            arrayDestructuring(newsData?.main?.tags, newsData?.main?.tags[0])
              ?.id :
          ''),
    });
  }
  schema.itemListElement.push({
    '@type': 'ListItem',
    'position': schema.itemListElement.length + 1,
    'name': newsData?.main?.title?.article,
    'item': newsData?.info?.link?.canonical?.toString() ?? '',
  });

  return (
    <Script
      id="BreadcrumSchema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
    />
  );
};

export default BreadCrumbs;
