import {config} from '@/app/_setup/config/client';
import {getNewsListSection} from '@/app/_setup/services';
import {ResolvingMetadata} from 'next';
import {headers} from 'next/headers';

type Props = {
  params: Promise<{ slug: Array<string> }>;
};

export const generateMetadata = async (props: Props, parent: ResolvingMetadata) => {
  const meta = await parent;
  const pathname = headers().get('x-request-pathname')!;

  const params = await props.params;
  const paths = pathname.split('/');
  const pageLinks = [];

  const page = params.slug.length > 1 ? Number(params.slug[2]) : 1;

  try {
    const response = await getNewsListSection({
      section: params.slug[0],
      size: Number(process.env.NEWS_PER_SECTION) ?? 0,
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
      page: page,
    });

    const section = response.data.data[0];

    if (!(response.data.data.length < Number(process.env.NEWS_PER_SECTION))) {
      pageLinks.push({
        rel: 'next',
        url: `${paths[1]}/${paths[2]}/${page + 1}`,
      });
    }

    if (page > 1) {
      pageLinks.push({
        rel: 'prev',
        url: `${paths[1]}/${paths[2]}/${page - 1}`,
      });
    }

    return {
      ...meta,
      title: `${config.name} | ${section.info.section?.name}`,
      icons: {
        other: pageLinks,
      },
      openGraph: {
        title: `${section.info.section?.name}`,
        type: 'website',
        url: `${config.siteUrl}${pathname}`,
      },
      twitter: {
        card: 'summary_large_image',
        title: `${section.info.section?.name}`,
        domain: config.siteUrl,
        url: `${config.siteUrl}${pathname}`,
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
