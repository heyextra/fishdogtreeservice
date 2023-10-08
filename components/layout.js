import { Inter, JetBrains_Mono } from 'next/font/google'
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
const jetBrains = JetBrains_Mono({weight:'600', subsets: ['latin']})

export default function Layout({ children }) {
  return (
    <>
  
        <Head>
          <title>Next.js Toolbox</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
     
            <header className={jetBrains.className}>
        <Header title="FISH DOG TREE SERVICE" />
        </header>
        <main className={inter.className}>{children}</main>
        <Footer />
   
       
    </>
  );
}
