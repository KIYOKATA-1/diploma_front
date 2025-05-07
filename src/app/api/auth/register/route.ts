import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const backendRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }
  );
  if (!backendRes.ok) {
    const err = await backendRes.json();
    return NextResponse.json(
      { error: err.message || 'Ошибка регистрации' },
      { status: backendRes.status }
    );
  }
  const data = await backendRes.json();
  return NextResponse.json(data);
}
