
import {Metadata} from 'next';
import {config} from './config';

const title = 'Diario La Hora - Noticias de Ecuador, sus regiones, provincias y Quito';
const description = 'Empresa periodística con diarios regionales, de carácter local. Nuestras 8 ediciones se enfocan en cubrir las necesidades de los lectores en cada comunidad.';

export const meta: Metadata = {
  title: title,
  description: description,
  robots: 'index, follow',
  other: {
    distribution: 'global',
    rating: 'general',
    language: config.lang,
  },
  openGraph: {
    title: `${title} | ${description}`,
    type: 'website',
    url: config.siteUrl,
    images: [
      {
        url: config.twitterSummaryCard.url,
        width: config.twitterSummaryCard.width,
        height: config.twitterSummaryCard.height,
      },
    ],
    siteName: config.name.toLocaleUpperCase(),
  },
  twitter: {
    title: `${title} | ${description}`,
    site: config.siteUrl,
    creator: 'BLUESTACK',
    description: description,
    images: [{
      url: config.twitterSummaryCard.url,
    }],
  },
};
