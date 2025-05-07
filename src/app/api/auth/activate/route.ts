import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  if (!email) {
    return NextResponse.json({ error: 'Email не указан' }, { status: 400 });
  }
  const backendRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/activate?email=${encodeURIComponent(email)}`,
    { method: 'GET' }
  );
  if (!backendRes.ok) {
    const txt = await backendRes.text();
    return NextResponse.json(
      { error: txt || 'Ошибка активации' },
      { status: backendRes.status }
    );
  }
  const data = await backendRes.json();
  return NextResponse.json(data);
}
