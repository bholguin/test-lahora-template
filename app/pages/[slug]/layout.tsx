import {config} from '@/app/_setup/config/client';
import {getPages} from '@/app/_setup/services';
import {ResolvingMetadata} from 'next';

type Props = {
  params: { slug: string };
};

export const generateMetadata = async (
  props: Props,
  parent: ResolvingMetadata
) => {
  const path = props.params.slug;
  const meta = await parent;
  try {
    const response = await getPages({
      path: `/pages/${path}`,
    });
    const title = response.data.data[0].info.title;
    return {
      ...meta,
      title: `${config.name} | ${title}`,
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
