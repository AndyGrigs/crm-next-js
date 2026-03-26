import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { findUserByEmail, verifyPassword } from '@/lib/users';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const user = findUserByEmail(email);

  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set('auth', 'true', {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24,
  });

  return NextResponse.json({ ok: true });
}
