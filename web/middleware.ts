import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: { signIn: "/auth/signin" },
});

export const config = {
  matcher: [
    "/okr/:path*",
    "/process/:path*",
    "/worklog/:path*",
    "/knowledge/:path*",
    "/reports/:path*",
    "/settings/:path*",
  ],
};
