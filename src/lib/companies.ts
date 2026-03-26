import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'companies.json');

export type Company = {
  id: number;
  name: string;
  category: string;
  status: string;
  promotion: boolean;
  country: string;
  joinedDate: string;
  description: string;
};

export function getCompanies(): Company[] {
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

export function getCompany(id: number): Company | undefined {
  return getCompanies().find((c) => c.id === id);
}

export function saveCompanies(companies: Company[]): void {
  fs.writeFileSync(filePath, JSON.stringify(companies, null, 2), 'utf-8');
}

export function addCompany(data: Omit<Company, 'id'>): Company {
  const companies = getCompanies();
  const id = companies.length > 0 ? Math.max(...companies.map((c) => c.id)) + 1 : 1;
  const company = { id, ...data };
  saveCompanies([...companies, company]);
  return company;
}

export function updateCompany(id: number, data: Partial<Omit<Company, 'id'>>): Company | null {
  const companies = getCompanies();
  const index = companies.findIndex((c) => c.id === id);
  if (index === -1) return null;
  companies[index] = { ...companies[index], ...data };
  saveCompanies(companies);
  return companies[index];
}

export function deleteCompany(id: number): boolean {
  const companies = getCompanies();
  const filtered = companies.filter((c) => c.id !== id);
  if (filtered.length === companies.length) return false;
  saveCompanies(filtered);
  return true;
}
