require('dotenv').config({ path: '.env.local' });
const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

async function getAllNotionData() {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      page_size: 100, // 한 번에 가져올 최대 항목 수
    });

    console.log('데이터베이스 조회 성공!');
    console.log('총 항목 수:', response.results.length);
    console.log('\n=== 데이터베이스 내용 ===\n');

    response.results.forEach((page, index) => {
      console.log(`[항목 ${index + 1}]`);
      // 모든 프로퍼티를 순회하며 출력
      const properties = page.properties;
      for (const key in properties) {
        const property = properties[key];
        let value = '';
        
        // 프로퍼티 타입에 따른 값 추출
        switch(property.type) {
          case 'title':
            value = property.title[0]?.plain_text || '';
            break;
          case 'rich_text':
            value = property.rich_text[0]?.plain_text || '';
            break;
          case 'number':
            value = property.number;
            break;
          case 'select':
            value = property.select?.name || '';
            break;
          case 'multi_select':
            value = property.multi_select.map(item => item.name).join(', ');
            break;
          case 'date':
            value = property.date?.start || '';
            break;
          case 'checkbox':
            value = property.checkbox;
            break;
          default:
            value = '지원되지 않는 타입';
        }
        
        console.log(`${key}: ${value}`);
      }
      console.log('-------------------');
    });

  } catch (error) {
    console.error('데이터베이스 조회 실패:', error.message);
  }
}

getAllNotionData();
