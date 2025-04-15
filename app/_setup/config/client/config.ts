import {Config} from '@/app/_setup/types/client-variables';
import {logos} from './logos';

export const config: Config = {
  apiUrl: process.env.NEXT_PUBLIC_API_HOST ?? '',
  apiPath: process.env.API_PATH ?? '',
  publication: 27,
  siteUrl: process.env.NODE_ENV === 'development' ? 'https://velok.news' : 'https://velok.news',
  twitterSummaryCard: {
    url: ' https://beta.lahora.com.ec/arte/202503191331/facebook_1200x630.png',
    width: 1200,
    height: 630,
    alt: 'Velok',
  },
  lang: 'es',
  name: 'La Hora',

  // aun sin uso
  newsType: 'news,lista',
  tagType: 63,
  headerLogo: logos.dark,
  socialBlockLogo: {
    ...logos.light,
    width: 200,
    height: 50,
  },
  useNextLink: false,
  timezone: -3,
  externalCss: '',
  squareLogo: {
    url: 'https://beta.lahora.com.ec/arte/202503191331/facebook_1200x630.png',
    width: 512,
    height: 512,
    alt: 'La Hora Logo',
  },
  landscapeLogo: {
    url: 'https://beta.lahora.com.ec/arte/202503191331/facebook_1200x630.png',
    width: 1200,
    height: 630,
    alt: 'La Hora Logo',
  },


  // whatsapp: "https://whatsapp.com/channel/0029VaCdcBU8KMqoB2NULf1R",
  googlenews: 'https://news.google.com/publications/CAAqBwgKMInqpQwwm-K0BA?hl=es-419&gl=US&ceid=US:es-419',
};
