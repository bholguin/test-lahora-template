import {getvideoListAdvanced} from '@/app/_setup/services';
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

  const page = (params.slug && params.slug.length === 2) ? Number(params.slug[1]) : 1;

  const response = await getvideoListAdvanced({
    size: Number(process.env.NEWS_PER_SECTION),
    query: 'Category:(videohome OR destacadoseccion OR seccion)',
    page: Number(page),
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
    icons: {
      other: pageLinks,
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
