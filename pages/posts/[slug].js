import { getGlobalData } from "../../utils/global-data";
import {
  getNextPostBySlug,
  getPostBySlug,
  getPreviousPostBySlug,
  postFilePaths,
} from "../../utils/mdx-utils";

import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import Link from "next/link";
import ArrowIcon from "../../components/ArrowIcon";
import CustomLink from "../../components/CustomLink";
import Footer from "../../components/Footer";
import Layout, { GradientBackground } from "../../components/Layout";
import SEO from "../../components/SEO";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Image from "next/image";
import {
  MDXH1,
  MDXH2,
  MDXH3,
  MDXH4,
  MDXH5,
  MDXH6,
} from "../../components/mdx/MDXHeaders";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: (props) => (
    // Always open links in new tab
    (<CustomLink
      {...props}
      target={props.href?.includes("#") ? "_self" : "_blank"}
      rel="noopener noreferrer"
    />)
  ),
  NextImage: (props) => (
    <div className="flex justify-center">
      <Image {...props} loading="lazy" />
    </div>
  ),
  h1: MDXH1,
  h2: MDXH2,
  h3: MDXH3,
  h4: MDXH4,
  h5: MDXH5,
  h6: MDXH6,
  Head,
};

export default function PostPage({
  source,
  frontMatter,
  prevPost,
  nextPost,
  globalData,
}) {
  return (
    (<Layout>
      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
      />
      <NavBar />
      <article className="px-6 md:px-0 mt-12">
        {/* Header text - title, separator, date & author, description */}
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-8">
            {frontMatter.title}
          </h1>
          <hr className="w-1/4 ml-auto mr-auto mt-4 mb-4" />
          <h3 className="text-center mb-4">
            {frontMatter.date} &#183; {frontMatter.author ?? "Josh Newham"}
          </h3>
          {frontMatter.description && (
            <p className="text-xl text-center mt-8 mb-8">
              {frontMatter.description}
            </p>
          )}
        </header>
        {/* Rendered Markdown content */}
        <main>
          <article className="prose dark:prose-invert max-w-full">
            <MDXRemote {...source} components={components} />
          </article>
        </main>
        {/* Footer with next and previous posts */}
        <div className="grid md:grid-cols-2 lg:-mx-24 mt-12">
          {prevPost && (
            <Link
              href={`/posts/${prevPost.slug}`}
              className="py-8 px-10 text-center md:text-right first:rounded-t-lg md:first:rounded-tr-none md:first:rounded-l-lg last:rounded-r-lg first last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-t md:border-r-0 md:last:border-r md:last:rounded-r-none flex flex-col">

              <p className="uppercase text-gray-500 mb-4 dark:text-white dark:opacity-60">
                Previous
              </p>
              <h4 className="text-2xl text-gray-700 mb-6 dark:text-white">
                {prevPost.title}
              </h4>
              <ArrowIcon className="transform rotate-180 mx-auto md:mr-0 mt-auto" />

            </Link>
          )}
          {nextPost && (
            <Link
              href={`/posts/${nextPost.slug}`}
              className="py-8 px-10 text-center md:text-left md:first:rounded-t-lg last:rounded-b-lg first:rounded-l-lg md:last:rounded-bl-none md:last:rounded-r-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-t-0 first:border-t first:rounded-t-lg md:border-t border-b-0 last:border-b flex flex-col">

              <p className="uppercase text-gray-500 mb-4 dark:text-white dark:opacity-60">
                Next
              </p>
              <h4 className="text-2xl text-gray-700 mb-6 dark:text-white">
                {nextPost.title}
              </h4>
              <ArrowIcon className="mt-auto mx-auto md:ml-0" />

            </Link>
          )}
        </div>
      </article>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>)
  );
}

export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPostBySlug(params.slug);
  const prevPost = getPreviousPostBySlug(params.slug);
  const nextPost = getNextPostBySlug(params.slug);

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
      prevPost,
      nextPost,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
