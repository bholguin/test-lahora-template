import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import Script from 'next/script';

const NewsList = ({newsRelated}: { newsRelated: NewListResponseData[] }) => {
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'ItemList',
    'itemListElement': newsRelated?.map((news, index) => {
      return {
        '@type': 'ListItem',
        'position': index + 1,
        'url': news.info.link.canonical,
      };
    }),
  };
  return (
    <Script
      id="NewsListSchema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
    />
  );
};

export default NewsList;
