interface Props {
  params: { id: string };
}

export default function UserPage({ params }: Props) {
  return (
    <main className="p-6 text-center">
      <h2 className="text-xl font-bold">User Profile</h2>
      <p>User ID: {params.id}</p>
    </main>
  );
}
