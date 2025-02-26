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
      Github: NotionProperty & {
        type: 'url';
        url: string | null;
      };
      Tag: NotionProperty & {
        type: 'multi_select';
        multi_select: Array<{ name: string }>;
      };
      WorkPeriod: NotionProperty & {
        type: 'date';
        date: { start: string; end: string | null };
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
          <div className="p-4 dark:text-yellow-500">
            <h3 className="text-lg font-bold mb-2">
              {item.properties.Name?.title[0]?.plain_text || 'Untitled'}
            </h3>
            <p className="text-gray-600 mb-2 dark:text-yellow-200">
              {item.properties.Description?.rich_text[0]?.plain_text || 'No description'}
            </p>
            
            {/* Work Period */}
            <div className="text-sm text-gray-500 mb-2 dark:text-yellow-200">
              {item.properties.WorkPeriod?.date ? (
                `${item.properties.WorkPeriod.date.start} ~ ${item.properties.WorkPeriod.date.end || 'Present'}`
              ) : 'Period not specified'}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-2">
              {item.properties.Tag?.multi_select?.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="px-2 py-1 bg-gray-200 rounded-full text-sm"
                >
                  {tag.name}
                </span>
              ))}
            </div>

            {/* Github Link */}
            {item.properties.Github?.url && (
              <a
                href={item.properties.Github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                GitHub Repository
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
} 