import {config} from '@/app/_setup/config/client';
import {getAutorInfo, getNewsListAutor} from '@/app/_setup/services';
import {ResolvingMetadata} from 'next';
import {headers} from 'next/headers';

type Props = {
  params: Promise<{ slug: Array<string> }>;
};

export const generateMetadata = async (
  props: Props,
  parent: ResolvingMetadata
) => {
  const meta = await parent;
  const pathname = headers().get('x-request-pathname')!;

  const params = await props.params;
  const paths = pathname.split('/');
  const pageLinks = [];

  const page = params.slug.length > 1 ? Number(params.slug[2]) : 1;

  try {
    const autor = await getAutorInfo({
      user: params.slug[0],
      exclude: 'groups',
      imagesizes: 'w:150,h:150,t:2',
    });

    const response = await getNewsListAutor({
      size: Number(process.env.NEWS_PER_SECTION) ?? 0,
      user: params.slug[0],
      page: page,
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
      imagesizes: 'w:343,h:193,t:2',
    });

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
      title: `${config.name} | ${autor.data.data[0].info.fullname}`,
      icons: {
        other: pageLinks,
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
