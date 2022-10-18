import { getPosts } from "../utils/mdx-utils";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout, { GradientBackground } from "../components/Layout";
import SEO from "../components/SEO";
import { getGlobalData } from "../utils/global-data";
import profilePic from "../public/headshot-circle.png";
import linkedInIcon from "../public/linkedin.svg";
import gitHubIcon from "../public/github.png";
import emailIcon from "../public/email.svg";
import Image from "next/image";

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full"></main>
      <Image src={profilePic} alt="A picture of me!" width={150} height={150} />
      <div className="logo-group mt-4 flex-row">
        <a
          className="mr-2"
          href="https://www.linkedin.com/in/josh-n-688619189/"
          target="_blank"
        >
          <Image
            src={linkedInIcon}
            alt="LinkedIn profile"
            width={48}
            height={48}
          />
        </a>
        <a
          className="mr-2"
          href="https://github.com/JoshNewham1"
          target="_blank"
        >
          <Image src={gitHubIcon} alt="GitHub profile" width={48} height={48} />
        </a>
        <a className="mr-2" href="mailto:joshnewham@live.com">
          <Image src={emailIcon} alt="Email me" width={48} height={48} />
        </a>
      </div>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
