// 이 파일은 자동으로 서버 컴포넌트가 됩니다
import Head from "next/head";
import Layout from "./component/layout";
import Hero from "./component/home/hero";
import Animation from "./component/home/animation";
import { Client } from '@notionhq/client';
import NotionData from './component/NotionData';

interface NotionProperty {
  type: string;
  title?: { plain_text: string }[];
  rich_text?: { plain_text: string }[];
  number?: number;
  select?: { name: string };
  multi_select?: { name: string }[];
  date?: { start: string };
  checkbox?: boolean;
}

interface SerializedNotionPage {
  properties: {
    [key: string]: NotionProperty;
  };
}

async function getNotionData() {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    page_size: 100,
  });

  const serializedData: SerializedNotionPage[] = response.results.map(page => ({
    properties: Object.entries(page.properties).reduce<Record<string, NotionProperty>>((acc, [key, prop]) => {
      acc[key] = {
        type: prop.type,
        ...(prop.type === 'title' && { 
          title: prop.title?.map(t => ({ plain_text: t.plain_text })) 
        }),
        ...(prop.type === 'rich_text' && { 
          rich_text: prop.rich_text?.map(t => ({ plain_text: t.plain_text })) 
        }),
        ...(prop.type === 'number' && { 
          number: prop.number 
        }),
        ...(prop.type === 'select' && { 
          select: { name: prop.select?.name } 
        }),
        ...(prop.type === 'multi_select' && { 
          multi_select: prop.multi_select?.map(s => ({ name: s.name })) 
        }),
        ...(prop.type === 'date' && { 
          date: { start: prop.date?.start } 
        }),
        ...(prop.type === 'checkbox' && { 
          checkbox: prop.checkbox 
        })
      };
      return acc;
    }, {})
  }));

  return serializedData;
}

export default async function Home() {
  const data = await getNotionData();
  
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

      {/* Notion 데이터 섹션 추가 */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-5 py-24">
          <h2 className="text-3xl font-bold text-center mb-8">Notion Data (Experimental)</h2>
          <NotionData data={data} />
        </div>
      </section>

    </Layout>
  );
}