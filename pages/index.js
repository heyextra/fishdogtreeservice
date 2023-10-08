import Head from "next/head";
import Welcome from "@components/Welcome"
import Header from "@components/Header";
import Services from "@components/Services"
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Toolbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="FISH DOG TREE SERVICE" />
      <Welcome/>
      <main>

        <p className="description">
          YOYOYOYOYOYO
          Here's an example of a Netlify Form! When you fill this out, the
          submissions can be found in the Netlify Admin site.
        </p>
        <FeedbackForm />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
