'use client';

import Image from 'next/image';

interface NotionProperty {
  type: string;
  title?: Array<{ plain_text: string }>;
  rich_text?: Array<{ plain_text: string }>;
  multi_select?: Array<{ name: string }>;
  date?: { start: string; end: string | null };
  url?: string | null;
}

interface NotionDataProps {
  data: {
    properties: {
      Name: NotionProperty & {
        type: 'title';
        title: Array<{ plain_text: string }>;
      };
      Description: NotionProperty & {
        type: 'rich_text';
        rich_text: Array<{ plain_text: string }>;
      };
      [key: string]: NotionProperty;
    };
    cover?: {
      type: 'external';
      external: {
        url: string;
      };
    } | null;
  }[];
}

export default function NotionData({ data }: NotionDataProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
          {item.cover?.type === 'external' && (
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