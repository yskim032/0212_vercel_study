'use client'; // 이 주석을 추가합니다.  

import Image from 'next/image';

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
  cover?: {
    type: 'external';
    external: {
      url: string;
    };
  } | null;
}

export default function NotionData({ data }: { data: NotionPage[] }) {
  const extractValue = (property: NotionProperty): string | number | boolean => {
    switch(property.type) {
      case 'title':
        return property.title?.[0]?.plain_text || '';
      case 'rich_text':
        return property.rich_text?.[0]?.plain_text || '';
      case 'number':
        return property.number || 0;
      case 'select':
        return property.select?.name || '';
      case 'multi_select':
        return property.multi_select?.map(item => item.name).join(', ') || '';
      case 'date':
        return property.date?.start || '';
      case 'checkbox':
        return property.checkbox || false;
      default:
        return '';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
          {/* Cover Image */}
          {item.cover && item.cover.type === 'external' && (
            <div className="relative w-full h-48">
              <Image
                src={item.cover.external.url}
                alt="Project Cover"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          
          {/* Content */}
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">
              {item.properties.Name?.title[0]?.plain_text || 'Untitled'}
            </h3>
            <p className="text-gray-600">
              {item.properties.Description?.rich_text[0]?.plain_text || 'No description'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
} 