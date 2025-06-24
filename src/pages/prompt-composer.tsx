import PromptComposer from '@/src/components/PromptComposer'
import Layout from '@/src/components/layout'
import type { NextPageWithLayout } from './_app'
import Head from 'next/head'

const PromptComposerPage: NextPageWithLayout = () => {
  return (
    <Layout home={false}>
      <Head>
        <title>Prompt Composer | Cooper Reed | Co-Operability</title>
        <meta
          name="description"
          content="A visual prompt building tool that demonstrates the modular nature of effective prompts for AI interactions."
        />
      </Head>
      <div className="min-h-screen">
        <PromptComposer />
      </div>
    </Layout>
  )
}

export default PromptComposerPage
