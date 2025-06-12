"use client";

import { DashboardLayout } from "@/components/shared/DashboardLayout";
import { ChatInterface } from "@/components/chat/ChatInterface";
import { ProgressSection } from "@/components/dashboard/ProgressSection";
import { ToolsSection } from "@/components/tools/ToolsSection";
import { NotificationPanel } from "@/components/sidebar/NotificationPanel";
import { RecommendationPanel } from "@/components/sidebar/RecommendationPanel";

export default function DashboardPage() {
  return (
    <DashboardLayout
      chatPanel={<ChatInterface />}
      sidebarPanel={
        <>
          <NotificationPanel />
          <RecommendationPanel />
        </>
      }
    >
      {/* 메인 대시보드 콘텐츠 */}
      <div className="flex flex-col gap-6">
        <ProgressSection />
        <ToolsSection />
      </div>
    </DashboardLayout>
  );
}