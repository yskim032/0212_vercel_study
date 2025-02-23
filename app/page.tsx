import Head from "next/head";
import Layout from "./component/layout";

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>Home : YS Tech</title>
        <meta name="description" content="YS Tech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1 className="text-3xl font-bold underline">
        HOME : This is YS Tech
      </h1>

    </Layout>
  )
}
