import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selltrat - AI 창업 어시스턴트",
  description: "머릿속 번쩍이던 그 순간을 붙잡아 보세요",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
