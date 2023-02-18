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
import NavBar from "../components/NavBar";
import skills from "../public/skills.json";
import Skill from "../components/Skill";
import { Textbox } from "../components/Textbox";
import { useState } from "react";

export default function Index({ posts, globalData }) {
  const [skillSearch, setSkillSearch] = useState("");
  return (
    <Layout>
      <SEO
        title="Portfolio • Josh Newham"
        description="A portfolio of my work history, skills and projects"
      />
      <NavBar />
      <Header name={globalData.name} />
      <main className="w-full"></main>
      <Image src={profilePic} alt="A picture of me!" width={150} height={150} />
      <div className="logo-group mt-4 flex-row">
        <a
          className="mr-2"
          href="https://www.linkedin.com/in/josh-n-688619189/"
          target="_blank"
          rel="noreferrer"
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
          rel="noreferrer"
        >
          <Image src={gitHubIcon} alt="GitHub profile" width={48} height={48} />
        </a>
        <a className="mr-2" href="mailto:joshnewham@live.com" rel="noreferrer">
          <Image src={emailIcon} alt="Email me" width={48} height={48} />
        </a>
      </div>
      {/* Bio */}
      <h2 className="mt-4 font-bold text-xl">Bio</h2>
      <div className="bio mr-4 ml-4 mt-4 border-2 rounded-md border-black dark:border-white">
        <p className="p-4">
          A budding software consultant with experience in web development,
          solutions design and databases. I love working in teams, solving
          real-world problems and delivering meaningful change. Learning new
          technologies along the way is always enjoyable as I progress towards
          becoming a full-stack developer.
        </p>
      </div>

      {/* Skills section */}
      <h2 className="mt-4 font-bold text-xl">Skills</h2>
      <Textbox
        className="mt-4 mb-4 w-2/3"
        placeholder="Search"
        value={skillSearch}
        onChange={(e) => setSkillSearch(e.target.value)}
      />

      {skills?.types?.map((t) => (
        <div className="mb-8 w-full" key={"type-" + t.name}>
          <h2 className="ml-2 font-semibold">{t.name}</h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3">
            {t.skills
              .filter(
                (s) =>
                  s.name.toLowerCase().includes(skillSearch.toLowerCase()) ||
                  (skillSearch.length > 1 &&
                    s.description
                      .toLowerCase()
                      .includes(skillSearch.toLowerCase()))
              )
              .map((s) => (
                <Skill skill={s} key={"skill-" + s.name} />
              ))}
          </div>
        </div>
      ))}

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
