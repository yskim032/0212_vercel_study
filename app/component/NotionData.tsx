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

  const renderProperties = (results: NotionPage[]) => {
    return results.map((page, index) => (
      <div key={index} className="border p-4 mb-4 rounded-lg">
        {Object.entries(page.properties).map(([key, property], propIndex) => (
          <div key={propIndex} className="mb-2">
            <span className="font-bold">{key}: </span>
            <span>{extractValue(property)}</span>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Notion Data</h1> */}
      {renderProperties(data)}
    </div>
  );
} 