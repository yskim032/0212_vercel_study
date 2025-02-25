import { Client } from '@notionhq/client';

// 서버 사이드에서만 실행되도록 체크
if (typeof window === 'undefined') {
  if (!process.env.NOTION_TOKEN) {
    throw new Error('Missing NOTION_TOKEN environment variable');
  }
}

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getDatabase() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  
  if (!databaseId) {
    throw new Error('Missing NOTION_DATABASE_ID environment variable');
  }

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    return response.results;
  } catch (error) {
    console.error('Error fetching Notion database:', error);
    throw error;
  }
}

// 테스트용 코드 (나중에 삭제 가능)
console.log('NOTION_TOKEN exists:', !!process.env.NOTION_TOKEN);
console.log('NOTION_DATABASE_ID exists:', !!process.env.NOTION_DATABASE_ID);
