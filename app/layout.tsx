import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MrChang0 - Personal Website",
  description: "一个用于展示个人介绍、项目作品、文章和联系方式的个人网站。",
  metadataBase: new URL("https://personal-website-kappa-sepia-17.vercel.app"),
  openGraph: {
    title: "MrChang0 - Personal Website",
    description: "个人介绍、项目作品、文章和联系方式。",
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
