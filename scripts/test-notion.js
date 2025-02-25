require('dotenv').config({ path: '.env.local' });
const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

async function testNotionConnection() {
  try {
    const database = await notion.databases.retrieve({
      database_id: process.env.NOTION_DATABASE_ID,
    });
    console.log('데이터베이스 연결 성공!');
    console.log('데이터베이스 제목:', database.title[0]?.plain_text);
  } catch (error) {
    console.error('데이터베이스 연결 실패:', error.message);
  }
}

testNotionConnection();
