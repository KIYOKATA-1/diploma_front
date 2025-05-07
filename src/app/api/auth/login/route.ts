import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const backendRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }
  );
  if (!backendRes.ok) {
    const err = await backendRes.json();
    return NextResponse.json(
      { error: err.message || 'Ошибка авторизации' },
      { status: backendRes.status }
    );
  }
  const data = await backendRes.json();
  const response = NextResponse.json({ user: { username: data.username } });
  response.cookies.set('token', data.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,        
  });
  return response;
}
