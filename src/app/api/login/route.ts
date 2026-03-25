import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const validEmail = process.env.ADMIN_EMAIL;
  const validPassword = process.env.ADMIN_PASSWORD;

  if (email !== validEmail || password !== validPassword) {
    return NextResponse.json(
      { message: 'Invalid email or password' },
      { status: 401 },
    );
  }

  const cookieStore = await cookies();
  cookieStore.set('auth', 'true', {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24, // 1 день
  });

  return NextResponse.json({ ok: true });
}