import { NextResponse } from 'next/server';
import { getCompany, updateCompany, deleteCompany } from '@/lib/companies';

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const company = getCompany(Number(id));
  if (!company) return NextResponse.json({ message: 'Not found' }, { status: 404 });
  return NextResponse.json(company);
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await request.json();
  const company = updateCompany(Number(id), body);
  if (!company) return NextResponse.json({ message: 'Not found' }, { status: 404 });
  return NextResponse.json(company);
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ok = deleteCompany(Number(id));
  if (!ok) return NextResponse.json({ message: 'Not found' }, { status: 404 });
  return NextResponse.json({ ok: true });
}
