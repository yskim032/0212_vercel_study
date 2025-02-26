// 이 파일은 자동으로 서버 컴포넌트가 됩니다
import Head from "next/head";
import Layout from "./component/layout";
import Hero from "./component/home/hero";
import Animation from "./component/home/animation";
import { Client } from '@notionhq/client';
import NotionData from './component/NotionData';

async function getNotionData() {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    page_size: 100,
  });

  // 필요한 데이터만 추출하여 직렬화 가능한 형태로 변환
  const serializedData = response.results.map(page => ({
    properties: Object.entries(page.properties).reduce((acc, [key, prop]) => {
      acc[key] = {
        type: prop.type,
        // 각 타입별로 필요한 데이터만 추출
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
    }, {} as Record<string, any>)
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
          <h2 className="text-3xl font-bold text-center mb-8">Portfolio (DB ex Notion)</h2>
          <NotionData data={data} />
        </div>
      </section>

    </Layout>
  );
}