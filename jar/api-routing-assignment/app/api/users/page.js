// app/users/page.js

async function getUsers() {
  // Simulate slow network
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });

  // Trigger error.js if API fails
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }

  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Users</h1>

      <ul className="space-y-2">
        {users.map((user) => ( 
          <li
            key={user.id}
            className="border p-4 rounded shadow-sm"
          >
            <p className="font-semibold">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
