import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "李书畅 / Shuchang Li - Backend Engineer",
  description:
    "Java 后端工程师，专注系统架构、性能优化、稳定性治理与工程效率。",
  metadataBase: new URL("https://personal-website-kappa-sepia-17.vercel.app"),
  openGraph: {
    title: "李书畅 / Shuchang Li - Backend Engineer",
    description:
      "构建高性能系统，也构建解决问题的方法。Java 后端工程师 · 系统架构 · 性能优化。",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
