import Link from "next/link";
import ArrowIcon from "../../components/ArrowIcon";
import Footer from "../../components/Footer";
import Layout, { GradientBackground } from "../../components/Layout";
import NavBar from "../../components/NavBar";
import SEO from "../../components/SEO";
import { getGlobalData } from "../../utils/global-data";
import { PAGE_SIZE, getPosts } from "../../utils/mdx-utils";
import Pagination from "../../components/Pagination";

export default function Blog({ posts, currentPage, pages, globalData }) {
  return (
    (<Layout>
      <SEO
        title="Blog • Josh Newham"
        description="A list of my most recent blog posts"
      />
      <NavBar />
      <main className="w-full mt-12"></main>
      <h1 className="mt-4 font-bold text-2xl mb-4">Blog Posts</h1>
      <ul className="w-full pl-4 pr-4">
        {posts &&
          posts.map((post, i) => (
            <li
              key={"blog-post-" + i}
              className="mb-4 md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
                href={`/posts/[slug]`}
                className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">

                {post.data.date && (
                  <span className="uppercase mb-3 font-bold opacity-60">
                    {post.data.date}
                  </span>
                )}
                {post.data.category && (
                  <span className="uppercase mb-3 font-bold opacity-60">
                    &nbsp;&#183;&nbsp;{post.data.category}
                  </span>
                )}
                <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                {post.data.description && (
                  <p className="mt-3 text-lg opacity-60">
                    {post.data.description}
                  </p>
                )}
                <ArrowIcon className="mt-4" />

              </Link>
            </li>
          ))}
      </ul>
      <Pagination numPages={pages} currentPage={currentPage} basePath="/blog" />
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>)
  );
}

export const getStaticProps = ({ params }) => {
  const globalData = getGlobalData();
  const posts = getPosts(params.page);
  const pages = Math.ceil(posts.numPosts / PAGE_SIZE);

  return {
    props: {
      posts: posts.posts,
      currentPage: parseInt(params.page),
      pages,
      globalData,
    },
  };
};

export const getStaticPaths = async () => {
  const totalPosts = getPosts().numPosts;
  const totalPages = Math.ceil(totalPosts / PAGE_SIZE);

  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
