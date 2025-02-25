'use client';

import { useEffect, useState } from 'react';

export default function NotionData() {
  const [data, setData] = useState<any[]>([]);
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

  return (
    <div>
      {data.map((item: any) => (
        <div key={item.id}>
          {/* Notion 데이터의 구조에 따라 표시할 내용을 조정하세요 */}
          <pre>{JSON.stringify(item, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
} 