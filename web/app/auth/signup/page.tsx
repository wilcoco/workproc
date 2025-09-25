"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, name, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "회원가입에 실패했습니다");
      }
      router.push("/auth/signin?registered=1");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-12 w-full max-w-md rounded-md border bg-white p-6 shadow-sm">
      <h1 className="mb-4 text-2xl font-semibold">회원가입</h1>
      {error && (
        <div className="mb-3 rounded border border-red-200 bg-red-50 p-2 text-sm text-red-700">
          {error}
        </div>
      )}
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm text-gray-700">이메일(필수)</label>
          <input
            type="email"
            className="w-full rounded border px-3 py-2 outline-none focus:ring"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-700">아이디(선택)</label>
          <input
            type="text"
            className="w-full rounded border px-3 py-2 outline-none focus:ring"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-700">이름(선택)</label>
          <input
            type="text"
            className="w-full rounded border px-3 py-2 outline-none focus:ring"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-700">비밀번호(필수)</label>
          <input
            type="password"
            className="w-full rounded border px-3 py-2 outline-none focus:ring"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? "가입 중..." : "회원가입"}
        </button>
      </form>
      <div className="mt-4 text-center text-sm text-gray-600">
        이미 계정이 있나요? <a className="text-blue-600 underline" href="/auth/signin">로그인</a>
      </div>
    </div>
  );
}
