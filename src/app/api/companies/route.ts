import { NextResponse } from 'next/server';
import { getCompanies, addCompany } from '@/lib/companies';

export async function GET() {
  const companies = getCompanies();
  return NextResponse.json(companies);
}

export async function POST(request: Request) {
  const body = await request.json();
  const company = addCompany({
    name: body.name ?? '',
    category: body.category ?? '',
    status: body.status ?? 'pending',
    promotion: body.promotion ?? false,
    country: body.country ?? '',
    joinedDate: body.date ?? new Date().toISOString().slice(0, 10),
    description: body.description ?? '',
  });
  return NextResponse.json(company, { status: 201 });
}
