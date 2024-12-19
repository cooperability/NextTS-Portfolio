import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: { [key: string]: any };
};

export default function PostPage({ source, frontMatter }: Props) {
  return (
    <Layout home>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{frontMatter.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={frontMatter.date} />
        </div>
        {/* UPDATED CODE START */}
        {source ? (
          <MDXRemote {...source} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: frontMatter.contentHtml }} />
        )}
        {/* UPDATED CODE END */}
      </article>
    </Layout>
  );
}

const POSTS_PATH = path.join(process.cwd(), 'posts');

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fs
    .readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    throw new Error('Slug is required');
  }
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  let mdxSource = null;
  if (postFilePath.endsWith('.mdx')) {
    mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
      scope: data,
    });
  }

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};