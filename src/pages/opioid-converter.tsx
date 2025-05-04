import OpioidConverter from '@/src/components/opioid-converter/OpioidConverter'
import OpioidConverterLayout from '@/src/components/opioid-converter/OpioidConverterLayout'
import type { NextPageWithLayout } from './_app'
import Head from 'next/head'

const OpioidConverterPage: NextPageWithLayout = () => {
  return (
    <OpioidConverterLayout>
      <Head>
        <title>Opioid Converter Tool</title>
      </Head>
      <div className="page-container">
        <OpioidConverter />
      </div>
    </OpioidConverterLayout>
  )
}

export default OpioidConverterPage
