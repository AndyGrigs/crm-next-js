import { NextResponse } from 'next/server';
import { findUserByEmail, createUser } from '@/lib/users';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  if (findUserByEmail(email)) {
    return NextResponse.json({ message: 'Email already in use' }, { status: 409 });
  }

  await createUser(name, email, password);

  const cookieStore = await cookies();
  cookieStore.set('auth', 'true', {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24,
  });

  return NextResponse.json({ ok: true }, { status: 201 });
}
