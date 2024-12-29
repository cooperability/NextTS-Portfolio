import Head from "next/head";

export default function OpioidConverterLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <link rel="icon" type="image/ico" href="/icon.ico" />
        <meta
          name="description"
          content="Medical opioid conversion calculator"
        />
      </Head>
      {children}
    </div>
  );
}