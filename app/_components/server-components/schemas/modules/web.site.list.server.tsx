import {config} from '@/app/_setup/config/client';


const WebsiteList = () => {
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    'name': config.name,
    'url': config.siteUrl,
    'potentialAction': {
      '@type': 'SearchAction',
      'target': config.siteUrl + '/buscar?query={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (<script id="WebsiteListSchema" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />);
};

export default WebsiteList;
