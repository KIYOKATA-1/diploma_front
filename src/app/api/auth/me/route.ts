import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }
  try {
    const decoded = jwt.decode(token) as any;
    const username = decoded.username || decoded.sub;
    return NextResponse.json({ user: { username } });
  } catch {
    return NextResponse.json({ user: null }, { status: 401 });
  }
}
