import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';

const filePath = path.join(process.cwd(), 'data', 'users.json');

export type User = {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
};

export function getUsers(): User[] {
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

function saveUsers(users: User[]): void {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf-8');
}

export function findUserByEmail(email: string): User | undefined {
  return getUsers().find((u) => u.email === email);
}

export async function createUser(name: string, email: string, password: string): Promise<User> {
  const users = getUsers();
  const id = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
  const passwordHash = await bcrypt.hash(password, 10);
  const user: User = { id, name, email, passwordHash };
  saveUsers([...users, user]);
  return user;
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
