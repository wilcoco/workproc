"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import type { Route } from "next";

export default function AuthButtons({ allowSignup = true }: { allowSignup?: boolean }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="text-sm text-gray-500">로딩...</div>;
  }

  if (!session) {
    const signinHref = "/auth/signin" as Route;
    const signupHref = "/auth/signup" as Route;
    return (
      <div className="flex items-center gap-2">
        <Link
          href={signinHref}
          className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
        >
          로그인
        </Link>
        {allowSignup && (
          <Link
            href={signupHref}
            className="rounded border px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
          >
            회원가입
          </Link>
        )}
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
