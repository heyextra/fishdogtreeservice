import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="container">
        <Head>
          <title>Next.js Toolbox</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header title="FISH DOG TREE SERVICE" />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
