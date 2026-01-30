"use client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    Cookies.set("token", "mock.jwt.token");
    router.push("/dashboard");
  };

  return (
    <main className="p-6 text-center">
      <h1 className="text-xl font-semibold">Login Page</h1>
      <button
        onClick={handleLogin}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Login
      </button>
    </main>
  );
}
