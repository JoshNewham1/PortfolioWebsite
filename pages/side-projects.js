import Image from "next/image";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Layout, { GradientBackground } from "../components/Layout";
import NavBar from "../components/NavBar";
import SEO from "../components/SEO";
import gobiImage from "../public/gobi.png";
import shopgreenImage from "../public/shopgreen.png";
import { getGlobalData } from "../utils/global-data";

export default function SideProjects() {
  const globalData = getGlobalData();
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <NavBar />
      <main className="w-full mt-12"></main>
      <h1 className="mt-4 font-bold text-2xl mb-4">Side Projects</h1>
      {/* Side Project content */}
      {/* ShopGreen */}
      <Card>
        <div>
          <h2 className="text-xl font-semibold">ShopGreen</h2>
          <h3 className="mb-4 text-sm italic">January 2022 -</h3>

          <div className="md:flex md:flex-row">
            <div className="basis-[780px]">
              <Image src={shopgreenImage} />
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
            <li>Scrape supermarkets' websites for products and prices daily</li>
            <li>
              Allow you to build up a "generic basket" across all of them,
              focusing on recipes rather than ingredients
            </li>
            <li>Calculate the best deal</li>
            <li>
              Auto-add the ingredients to the chosen supermarket's website
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
      {/* GOBI */}
      <Card>
        <div>
          <h2 className="text-xl font-semibold">GOBI (Good or Bad Image)</h2>
          <h3 className="mb-4 text-sm italic">
            September 2019 - July 2020 (A-Level Project)
          </h3>
          <Image src={gobiImage} />
          <p className="mt-2">
            GOBI is a photo organiser aimed at mobile phone galleries that ranks
            images with a neural network and find ones that it deems blurry or
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
