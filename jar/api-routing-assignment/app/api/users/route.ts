import { NextResponse } from 'next/server';

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// GET /api/users
export async function GET() {
  return NextResponse.json(users);
}

// POST /api/users
export async function POST(request: Request) {
  const body = await request.json();

  const newUser = {
    id: users.length + 1,
    name: body.name,
  };

  users.push(newUser);

  return NextResponse.json(
    { message: 'User created', user: newUser },
    { status: 201 }
  );
}
