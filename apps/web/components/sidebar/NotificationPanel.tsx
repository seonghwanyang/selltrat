"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Notification {
  id: string;
  type: "urgent" | "update" | "tip";
  typeLabel: string;
  content: string;
  time: string;
  isUrgent?: boolean;
}

const notifications: Notification[] = [
  {
    id: "1",
    type: "urgent",
    typeLabel: "🚨 긴급",
    content: "펫프렌즈 코리아 견적서 도착",
    time: "2분 전",
    isUrgent: true,
  },
  {
    id: "2",
    type: "update",
    typeLabel: "📊 업데이트",
    content: "시장 트렌드 리포트 업데이트",
    time: "15분 전",
  },
  {
    id: "3",
    type: "tip",
    typeLabel: "💡 팁",
    content: "관세율 변경 안내",
    time: "1시간 전",
  },
];

export function NotificationPanel() {
  return (
    <Card className="p-5 border-[#e5e5e5] shadow-sm">
      <h3 className="text-base font-semibold text-[#1a1a1a] mb-4">알림</h3>

      <div className="space-y-3">
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </div>
    </Card>
  );
}

function NotificationItem({ notification }: { notification: Notification }) {
  return (
    <div
      className={cn(
        "p-3 rounded-lg text-[13px] cursor-pointer transition-all",
        notification.isUrgent
          ? "bg-[#fff8f5] border border-[#ffe4d6]"
          : "bg-[#f5f5f5] hover:bg-[#f9f9f9]"
      )}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="font-semibold text-[#1a1a1a]">
          {notification.typeLabel}
        </span>
        <span className="text-xs text-[#999999]">{notification.time}</span>
      </div>
      <div className="text-[#666666]">{notification.content}</div>
    </div>
  );
}
