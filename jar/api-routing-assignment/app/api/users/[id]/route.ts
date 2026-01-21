import { NextResponse } from 'next/server';

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// GET /api/users/:id
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // ✅ FIX

  const user = users.find(
    u => u.id === Number(id)
  );

  if (!user) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}

// PUT /api/users/:id
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const user = users.find(
    u => u.id === Number(id)
  );

  if (!user) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    );
  }

  user.name = body.name;

  return NextResponse.json({
    message: 'User updated',
    user
  });
}

// DELETE /api/users/:id
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  users = users.filter(
    u => u.id !== Number(id)
  );

  return NextResponse.json({
    message: 'User deleted'
  });
}

