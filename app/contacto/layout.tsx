import {config} from '@/app/_setup/config/client';
import {ResolvingMetadata} from 'next';

type Props = {
  params: { slug: string };
};

export const generateMetadata = async (
  _props: Props,
  parent: ResolvingMetadata
) => {
  const meta = await parent;
  return {
    ...meta,
    title: `${config.name} | Contacto`,
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
