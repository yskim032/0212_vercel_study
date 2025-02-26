'use client';

import { useEffect, useState } from 'react';

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

interface NotionPage {
  properties: {
    [key: string]: NotionProperty;
  };
}

export default function NotionData() {
  const [data, setData] = useState<NotionPage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/notion');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  const extractValue = (property: NotionProperty): string | number | boolean => {
    // ... existing code ...
  };

  const renderProperties = (results: NotionPage[]) => {
    // ... existing code ...
  };

  return (
    <div>
      {data.map((item: NotionPage) => (
        <div key={item.id}>
          {/* Notion 데이터의 구조에 따라 표시할 내용을 조정하세요 */}
          <pre>{JSON.stringify(item, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
} 