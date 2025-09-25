"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const search = useSearchParams();
  const callbackUrl = search.get("callbackUrl") ?? "/";
  const error = search.get("error");

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      redirect: true,
      callbackUrl,
      identifier,
      password,
    });
    // redirection handled by next-auth
    setLoading(false);
    return res;
  };

  return (
    <div className="mx-auto mt-12 w-full max-w-md rounded-md border bg-white p-6 shadow-sm">
      <h1 className="mb-4 text-2xl font-semibold">로그인</h1>
      {error && (
        <div className="mb-3 rounded border border-red-200 bg-red-50 p-2 text-sm text-red-700">
          로그인에 실패했습니다. 아이디/이메일 또는 비밀번호를 확인하세요.
        </div>
      )}
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm text-gray-700">아이디 또는 이메일</label>
          <input
            type="text"
            className="w-full rounded border px-3 py-2 outline-none focus:ring"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-700">비밀번호</label>
          <input
            type="password"
            className="w-full rounded border px-3 py-2 outline-none focus:ring"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? "로그인 중..." : "로그인"}
        </button>
      </form>
      <div className="mt-4 text-center text-sm text-gray-600">
        계정이 없나요? <a className="text-blue-600 underline" href="/auth/signup">회원가입</a>
      </div>
    </div>
  );
}
