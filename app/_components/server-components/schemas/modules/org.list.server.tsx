import {config} from '@/app/_setup/config/client';

const OrgList = () => {
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    'name': config.name,
    'url': config.siteUrl,
    'logo': config.squareLogo.url,
    /*     'sameAs': socials.accounts.map((item) => {
      return item.url;
    }), */
  };

  return (
    <script
      id="WebsiteListSchema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
    />
  );
};

export default OrgList;
