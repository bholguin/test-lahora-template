import {getNews} from '@/app/_setup/services';
import {ResolvingMetadata} from 'next';
import {getTypeOfNews} from './hook';
import {config} from '@/app/_setup/config/client';

type Props = {
  params: { news: string };
};

export const generateMetadata = async (
  props: Props,
  parent: ResolvingMetadata
) => {
  const path = getTypeOfNews(props);
  const meta = await parent;
  try {
    const response = await getNews({
      imagesizes: 'w:801,h:424,t:2;w:412,h:231,t:2;',
      path: path,
    });
    const news = response.data.data[0];
    return {
      ...meta,
      title: news?.main?.title?.article,
      robots: 'index, follow, max-image-preview:large',
      canonical: news?.info?.link?.canonical,
      description: news?.main?.subtitle?.striped ?
        news?.main?.subtitle?.striped :
        '',
      news_keywords:
        news?.main?.tags?.length > 0 ?
          news?.main?.tags?.map((tag) => tag.name).join(', ') :
          '',
      keywords:
        news?.main?.tags?.length > 0 ?
          news?.main?.tags?.map((tag) => tag.name).join(', ') :
          '',
      openGraph: {
        title: news?.main?.title?.article,
        url: news?.info?.link?.canonical,
        description: news?.main?.subtitle?.striped ?
          news?.main?.subtitle?.striped :
          '',
        images: [
          {
            url: news?.preview?.sizes[0]?.url,
            width: news?.preview?.sizes[0]?.width,
            height: news?.preview?.sizes[0]?.height,
          },
        ],
        siteName: config.name.toLocaleUpperCase(),
      },
      twitter: {
        title: news?.main?.title?.article,
        card: 'summary_large_image',
        site: config.siteUrl,
        description: news?.main?.subtitle?.striped ?
          news?.main?.subtitle?.striped :
          '',
        images: [
          {
            url: news?.preview?.original?.url,
          },
        ],
      },
    };
  } catch (e) {
    console.error(e);
    return {
      ...meta,
    };
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
