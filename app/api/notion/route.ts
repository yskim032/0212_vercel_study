import { NextResponse } from 'next/server';
import { getDatabase } from '../../lib/notion';

export async function GET() {
  try {
    const data = await getDatabase();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch Notion data' },
      { status: 500 }
    );
  }
}
