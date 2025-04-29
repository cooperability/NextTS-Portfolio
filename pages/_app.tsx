import '../styles/global.css'
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "next-themes";
import type { AppProps } from 'next/app'
import type { NextPage } from 'next';
import Layout from '@/components/layout';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <ThemeProvider enableSystem={true} attribute="class">
      {getLayout(<Component {...pageProps} />)}
      <Analytics />
    </ThemeProvider>

  );
}
