import Link from "next/link";

export default function UsersPage() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-xl font-bold">Users</h1>
      <Link href="/users/1">User 1</Link>
    </main>
  );
}
