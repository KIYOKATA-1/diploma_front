import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

export async function GET(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }
  try {
    const decoded = jwt.decode(token);
    if (!decoded || typeof decoded !== "object" || Array.isArray(decoded)) {
      throw new Error("Неверный токен");
    }
    const payload = decoded as JwtPayload;
    const username =
      typeof payload.username === "string"
        ? payload.username
        : typeof payload.sub === "string"
        ? payload.sub
        : null;
    if (!username) throw new Error("Неверный токен");
    return NextResponse.json({ user: { username } });
  } catch {
    return NextResponse.json({ user: null }, { status: 401 });
  }
}
