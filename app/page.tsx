'use client'

import Head from "next/head";
import Layout from "./component/layout";
import Hero from "./component/home/hero";
import Animation from "./component/home/animation";

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>Home : YS Tech</title>
        <meta name="description" content="YS Tech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <Hero />
            <Animation />
        </div>                          
      </section>

    </Layout>
  )
}
