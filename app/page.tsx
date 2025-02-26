// 이 파일은 자동으로 서버 컴포넌트가 됩니다
import Head from "next/head";
import Layout from "./component/layout";
import Hero from "./component/home/hero";
import Animation from "./component/home/animation";
import { Client } from '@notionhq/client';
import NotionData from './component/NotionData';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

interface NotionProperty {
  type: string;
  title?: Array<{ plain_text: string }>;
  rich_text?: Array<{ plain_text: string }>;
  number?: number;
  select?: { name: string };
  multi_select?: Array<{ name: string }>;
  date?: { start: string; end: string | null };
  url?: string | null;
  checkbox?: boolean;
}

interface SerializedNotionPage {
  properties: {
    [key: string]: NotionProperty;
  };
  cover?: {
    type: 'external';
    external: {
      url: string;
    };
  } | null;
}

async function getNotionData(): Promise<SerializedNotionPage[]> {
  try {
    const notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });

    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID as string,
      page_size: 100,
    });

    const pages = response.results.filter((page): page is PageObjectResponse => 
      'properties' in page && page.object === 'page'
    );

    return pages.map(page => {
      const properties = Object.entries(page.properties).reduce((acc, [key, prop]) => {
        const typedProp = prop as NotionProperty;
        
        const propertyValue = {
          type: typedProp.type,
          ...(typedProp.type === 'title' && { 
            title: typedProp.title?.map(t => ({ plain_text: t.plain_text }))
          }),
          ...(typedProp.type === 'rich_text' && { 
            rich_text: typedProp.rich_text?.map(t => ({ plain_text: t.plain_text }))
          }),
          ...(typedProp.type === 'number' && { 
            number: typedProp.number
          }),
          ...(typedProp.type === 'select' && { 
            select: { name: typedProp.select?.name }
          }),
          ...(typedProp.type === 'multi_select' && { 
            multi_select: typedProp.multi_select?.map(s => ({ name: s.name }))
          }),
          ...(typedProp.type === 'date' && { 
            date: { start: typedProp.date?.start, end: null }
          }),
          ...(typedProp.type === 'checkbox' && { 
            checkbox: typedProp.checkbox
          })
        };

        acc[key] = propertyValue as NotionProperty;
        return acc;
      }, {} as SerializedNotionPage['properties']);

      // Name과 Description이 없는 경우 기본값 추가
      if (!properties.Name?.title) {
        properties.Name = {
          type: 'title',
          title: [{ plain_text: 'Untitled' }]
        } as NotionProperty;
      }
      if (!properties.Description?.rich_text) {
        properties.Description = {
          type: 'rich_text',
          rich_text: [{ plain_text: 'No description' }]
        } as NotionProperty;
      }

      return {
        properties,
        cover: page.cover?.type === 'external' ? {
          type: 'external',
          external: { url: page.cover.external.url }
        } : null
      };
    });

  } catch (error) {
    console.error('Error fetching Notion data:', error);
    return [];
  }
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
          <NotionData data={data as unknown as {
            properties: {
              Name: NotionProperty & { type: 'title'; title: Array<{ plain_text: string }> };
              Description: NotionProperty & { type: 'rich_text'; rich_text: Array<{ plain_text: string }> };
              [key: string]: NotionProperty;
            };
            cover?: {
              type: 'external';
              external: {
                url: string;
              };
            } | null;
          }[]} />
        </div>
      </section>

    </Layout>
  );
}

// 15