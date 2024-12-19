import '../styles/global.css'
import "tailwindcss/tailwind.css";
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "next-themes";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>

  );
}
