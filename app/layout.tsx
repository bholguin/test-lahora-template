import {Metadata} from 'next';
import {meta, config} from './_setup/config/client';
import './globals.css';
import {getBanners} from './_setup/services';
import {FormatScripts} from './_setup/helpers/generateScripts';
import Script from 'next/script';

export const metadata: Metadata = {
  ...meta,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const response = await getBanners({
    template: 'Home',
  });

  const banners = response.data.data;

  return (
    <html lang={config.lang}>
      <head>
        <Script src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_KEY}`} />
        <link
          rel="preload"
          as="font"
          href="/fonts/202503191331/librefranklin800.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <FormatScripts
          scripts={
            banners.find((item) => item.key === 'headscripts')?.value || ''
          }
        />
      </head>
      <body>
        <FormatScripts
          scripts={
            banners.find((item) => item.key === 'bodybefore')?.value || ''
          }
        />
        {children}
        <FormatScripts
          scripts={
            banners.find((item) => item.key === 'bodyafter')?.value || ''
          }
        />
      </body>
    </html>
  );
}
