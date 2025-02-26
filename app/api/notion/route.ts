import { NextResponse } from 'next/server';
import { getDatabase } from '../../lib/notion';

export async function GET() {
  try {
    const data = await getDatabase();
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
