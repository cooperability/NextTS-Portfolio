import '../styles/global.css'
import "tailwindcss/tailwind.css";
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>

  );
}
