import {ResolvingMetadata} from 'next';
import {config} from '../_setup/config/client';
import {headers} from 'next/headers';


export const generateMetadata = async (
  _props: any,
  parent: ResolvingMetadata
) => {
  const meta = await parent;
  const query = headers().get('x-request-query')!;
  if (query && query.trim() !== '') {
    return {
      ...meta,
      title: `${config.name} | ${`Resultados de '${query}'`}`,
    };
  } else {
    return {
      ...meta,
      title: `${config.name} | Buscar`,
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
