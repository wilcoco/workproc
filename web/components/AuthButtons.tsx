"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButtons() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="text-sm text-gray-500">로딩...</div>;
  }

  if (!session) {
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={() => signIn()}
          className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
        >
          로그인
        </button>
        <button
          onClick={() => signIn("credentials", { username: "dev", redirect: false })}
          className="rounded border px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
          title="개발용 빠른 로그인"
        >
          Dev 로그인
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-700">{session.user?.name ?? session.user?.email}</span>
      <button
        onClick={() => signOut({ redirect: false })}
        className="rounded border px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
      >
        로그아웃
      </button>
    </div>
  );
}
