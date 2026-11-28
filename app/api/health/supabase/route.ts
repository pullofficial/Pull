import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return NextResponse.json(
      { configured: false, connected: false },
      { status: 503, headers: { 'Cache-Control': 'no-store' } }
    );
  }

  try {
    const response = await fetch(new URL('/auth/v1/settings', url), {
      method: 'GET',
      headers: { apikey: key },
      cache: 'no-store',
      signal: AbortSignal.timeout(8000)
    });

    return NextResponse.json(
      { configured: true, connected: response.ok },
      {
        status: response.ok ? 200 : 502,
        headers: { 'Cache-Control': 'no-store' }
      }
    );
  } catch {
    return NextResponse.json(
      { configured: true, connected: false },
      { status: 502, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}
