import OpioidConverter from '@/components/opioid-converter/OpioidConverter';
import Head from 'next/head';
import { useCallback } from 'react';
import { useRouter } from 'next/router';

const OpioidConverterPage = () => {
  const router = useRouter();

  // Handle client-side errors
  const handleError = useCallback((error: Error) => {
    console.error('Opioid Converter Error:', error);
    // Optionally redirect to error page or show error UI
    router.push('/500');
  }, [router]);

  return (
    <>
      <Head>
        <title>Opioid Converter Tool</title>
        <meta name="description" content="Medical opioid conversion calculator" />
      </Head>
      <div className="page-container">
        <h1>Opioid Conversion Calculator</h1>
        <p>Convert between different opioid medications safely and accurately.</p>
        <OpioidConverter onError={handleError} />
      </div>
    </>
  );
};

export default OpioidConverterPage;