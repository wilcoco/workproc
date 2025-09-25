import "./globals.css";
import "reactflow/dist/style.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "workproc",
  description: "OKR 중심 업무일지",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const allowSignup = process.env.DISABLE_SIGNUP !== "true";
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Providers>
          <header className="border-b bg-white">
            <div className="mx-auto max-w-5xl p-4">
              <Nav allowSignup={allowSignup} />
            </div>
          </header>
          <main className="mx-auto max-w-5xl p-6">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
