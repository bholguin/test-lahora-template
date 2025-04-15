import {config} from '@/app/_setup/config/client';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';

const ItemList = ({
  newsCondensedList,
}: {
  newsCondensedList: Array<NewListResponseData>;
}) => {
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'ItemList',
    'itemListElement': newsCondensedList
      .filter((item, index) => index < 10)
      .map((item, index) => {
        return {
          '@type': 'ListItem',
          'position': index + 1,
          'url': `${config.siteUrl}${item.info.link.url}`,
        };
      }),
  };
  return (
    <script
      id="NewsListSchema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
    />
  );
};

export default ItemList;
