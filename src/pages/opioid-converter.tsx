import OpioidConverter from '@/src/components/opioid-converter/OpioidConverter'
import OpioidConverterLayout from '@/src/components/opioid-converter/OpioidConverterLayout'
import type { NextPageWithLayout } from './_app'
import Head from 'next/head'
import { useCallback } from 'react'
import { useRouter } from 'next/router'

const OpioidConverterPage: NextPageWithLayout = () => {
  const router = useRouter()

  const handleError = useCallback(
    (error: Error) => {
      console.error('Opioid Converter Error:', error)
      router.push('/500')
    },
    [router]
  )

  return (
    <OpioidConverterLayout>
      <Head>
        <title>Opioid Converter Tool</title>
      </Head>
      <div className="page-container">
        <OpioidConverter onError={handleError} />
      </div>
    </OpioidConverterLayout>
  )
}

export default OpioidConverterPage
