"use client";

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
  chatPanel?: React.ReactNode;
  sidebarPanel?: React.ReactNode;
  className?: string;
}

export function DashboardLayout({ 
  children, 
  chatPanel,
  sidebarPanel,
  className 
}: DashboardLayoutProps) {
  return (
    <div className={cn("flex h-screen bg-[#fafafa]", className)}>
      {/* 좌측 채팅 패널 - 440px */}
      {chatPanel && (
        <aside className="w-[440px] bg-white border-r border-[#e5e5e5] flex flex-col">
          {chatPanel}
        </aside>
      )}
      
      {/* 중앙 메인 콘텐츠 영역 */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <ScrollArea className="flex-1">
          <div className="p-6">
            {children}
          </div>
        </ScrollArea>
      </main>
      
      {/* 우측 사이드바 - 280px */}
      {sidebarPanel && (
        <aside className="w-[280px] flex flex-col gap-6 p-6">
          {sidebarPanel}
        </aside>
      )}
    </div>
  );
}