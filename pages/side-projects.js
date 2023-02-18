import Image from "next/image";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Layout, { GradientBackground } from "../components/Layout";
import NavBar from "../components/NavBar";
import SEO from "../components/SEO";
import gobiImage from "../public/gobi.png";
import beerTastingImage from "../public/kug-beer-tasting.jpg";
import { getGlobalData } from "../utils/global-data";

export default function SideProjects() {
  const globalData = getGlobalData();
  return (
    <Layout>
      <SEO
        title="Side Projects • Josh Newham"
        description="A list of side-projects I've done and what I've learnt along the way"
      />
      <NavBar />
      <main className="w-full mt-12"></main>
      <h1 className="mt-4 font-bold text-2xl mb-4">Side Projects</h1>
      {/* Side Project content */}
      {/* KUG Beer Festival Website */}
      <Card>
        <div>
          <h2 className="text-xl font-semibold">Charity Beer Festival App</h2>
          <h3 className="mb-4 text-sm italic">January 2023</h3>

          <div className="md:flex md:flex-row">
            <div className="basis-[1600px]">
              <Image src={beerTastingImage} alt="ShopGreen's interface" />
            </div>
            <p className="md:ml-4 mt-2">
              During my downtime in the Christmas study break, I helped the
              local Scouts and Guides group update their website and digitise
              the beer list for this year&lsquo;s Beer Festival. This involved
              creating a mobile-focused web app that allows users to see the
              tasting notes for each beer and rank it. There is then a
              leaderboard where users can see their top beers and how their
              ranking stacks up against the average.
            </p>
          </div>

          <p className="mt-4">
            Whilst saving paper and money, this also gives the group a greater
            insight into which beers were popular so they can plan the next
            year&lsquo;s selection accordingly. I used an older tech stack to
            reduce costs and allow this new app to be integrated straight into
            their existing WordPress site.
          </p>
          <p className="mt-4">
            If you&lsquo;d like to try it for yourself, you can check it out{" "}
            <a
              className="underline text-purple-400"
              href="https://www.kug.org.uk/beer-tasting-notes"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
          <p className="mt-4 italic">
            Technologies: PHP, HTML, CSS, JavaScript, MySQL
          </p>
        </div>
      </Card>

      {/* ShopGreen */}
      {/* 
        <Card>
        <div>
          <h2 className="text-xl font-semibold">ShopGreen</h2>
          <h3 className="mb-4 text-sm italic">January 2022 -</h3>

          <div className="md:flex md:flex-row">
            <div className="basis-[780px]">
              <Image src={shopgreenImage} alt="ShopGreen's interface" />
            </div>
            <p className="md:ml-4 mt-2">
              ShopGreen is a work in progress app that will compare prices for
              online groceries, automatically add them to your basket and
              estimate your carbon footprint. It aims to greatly improve the
              online shopping experience and improve awareness of your carbon
              footprint.
            </p>
          </div>

          <p className="mt-4">
            When completed and ready for the market, it will:
          </p>
          <ul className="pl-8 list-disc">
            <li>
              Scrape supermarkets&lsquo; websites for products and prices daily
            </li>
            <li>
              Allow you to build up a &ldquo;generic basket&ldquo; across all of
              them, focusing on recipes rather than ingredients
            </li>
            <li>Calculate the best deal</li>
            <li>
              Auto-add the ingredients to the chosen supermarket&lsquo;s website
            </li>
            <li>
              Approximate your carbon footprint based on shops and give you
              pointers to improve it
            </li>
          </ul>
          <p className="mt-4 italic">
            Technologies: TypeScript, Next JS, TRPC, Tailwind, PostgreSQL
          </p>
        </div>
      </Card>
      */}

      {/* GOBI */}
      <Card>
        <div>
          <h2 className="text-xl font-semibold">GOBI (Good or Bad Image)</h2>
          <h3 className="mb-4 text-sm italic">
            September 2019 - July 2020 (A-Level Project)
          </h3>
          <Image src={gobiImage} alt="GOBI's interface" />
          <p className="mt-2">
            GOBI is a photo organiser aimed at mobile phone galleries that ranks
            images with a neural network and finds ones that it deems blurry or
            of low quality and recommend their removal. A video demo is linked{" "}
            <a
              className="underline text-purple-400"
              href="https://www.youtube.com/watch?v=hTSUVO5CBwE"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
          <p className="mt-4">
            This was my first stab at full-stack web development. I had to
            submit{" "}
            <a
              className="underline text-purple-400"
              href="https://drive.google.com/file/d/1_jZcKKKdKh2VaWzYLWNU0R411o0AUbWY/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              a (very long!) paper
            </a>{" "}
            on a full-stack solution for my A-Level project and decided that it
            would be a good opportunity to explore Node JS and neural networks -
            two technologies I was very interested in at the time. I learned a
            lot about JavaScript, testing and data science and it put me in good
            stead for developing future ideas.
          </p>
          <p className="mt-4 italic">
            Technologies: Node JS, SQLite, Tensorflow, HTML, CSS, JavaScript,
            jQuery
          </p>
        </div>
      </Card>
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
