"use client";

import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* 사이드바 */}
      <aside className="w-64 bg-white border-r">
        <div className="p-4">
          <h1 className="text-xl font-bold">Selltrat</h1>
        </div>
      </aside>

      {/* 메인 콘텐츠 */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
