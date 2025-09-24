"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import AuthButtons from "@/components/AuthButtons";
import type { Route } from "next";

const links: ReadonlyArray<{ href: Route; label: string }> = [
  { href: "/", label: "대시보드" },
  { href: "/okr", label: "OKR" },
  { href: "/process", label: "프로세스" },
  { href: "/worklog", label: "업무일지" },
  { href: "/knowledge", label: "노하우" },
  { href: "/reports", label: "리포트" },
  { href: "/settings", label: "설정" }
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-wrap items-center gap-4 text-sm">
      <span className="mr-4 font-bold">workproc</span>
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={clsx(
            "rounded px-2 py-1 hover:bg-gray-100",
            pathname === l.href && "bg-gray-200"
          )}
        >
          {l.label}
        </Link>
      ))}
      <div className="ml-auto">
        <AuthButtons />
      </div>
    </nav>
  );
}
