"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Factory, Calculator, Search, FileSearch } from "lucide-react";
import { cn } from "@/lib/utils";

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  iconColor: "orange" | "blue" | "purple" | "green";
  meta: {
    label: string;
    value: string;
  }[];
  primaryAction: string;
  secondaryAction?: string;
}

const tools: Tool[] = [
  {
    id: "oem-matching",
    name: "OEM 업체 매칭",
    description: "검증된 제조업체와 직접 연결하여 최적의 조건으로 상품 생산",
    icon: <Factory className="w-6 h-6" />,
    iconColor: "orange",
    meta: [
      { label: "📊 업체", value: "1,247개" },
      { label: "⚡ 평균 응답", value: "2시간" },
      { label: "✅ 검증 완료", value: "" },
    ],
    primaryAction: "시작하기",
    secondaryAction: "상세보기",
  },
  {
    id: "customs-calculator",
    name: "스마트 관세 계산기",
    description: "수입 비용을 정확하게 계산하여 예상치 못한 비용 방지",
    icon: <Calculator className="w-6 h-6" />,
    iconColor: "blue",
    meta: [
      { label: "🌍", value: "195개국 지원" },
      { label: "📅", value: "실시간 환율" },
      { label: "📑", value: "FTA 자동 적용" },
    ],
    primaryAction: "계산하기",
    secondaryAction: "이력보기",
  },
  {
    id: "quality-verification",
    name: "품질 검증 시스템",
    description: "AI 기반 이미지 분석과 인증서 검증으로 제품 품질 사전 확인",
    icon: <Search className="w-6 h-6" />,
    iconColor: "purple",
    meta: [
      { label: "🤖 AI 정확도", value: "97%" },
      { label: "🔐", value: "인증서 DB" },
      { label: "⭐", value: "리뷰 분석" },
    ],
    primaryAction: "검증하기",
    secondaryAction: "가이드",
  },
];

export function ToolsSection() {
  return (
    <Card className="p-6 border-[#e5e5e5] shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-[#1a1a1a]">실행 도구</h2>
      </div>

      <div className="space-y-3">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </Card>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  const iconBgColors = {
    orange: "bg-[#fff8f5] text-[#ff6b35]",
    blue: "bg-[#f0f7ff] text-[#4285f4]",
    purple: "bg-[#faf5ff] text-[#8b5cf6]",
    green: "bg-[#f0fdf4] text-[#0d9488]",
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-[#f5f5f5] rounded-xl border border-[#e5e5e5] hover:bg-white hover:border-[#666666] transition-all cursor-pointer group">
      {/* 아이콘 */}
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center",
          iconBgColors[tool.iconColor]
        )}
      >
        {tool.icon}
      </div>

      {/* 콘텐츠 */}
      <div className="flex-1">
        <h3 className="font-semibold text-[#1a1a1a] mb-1">{tool.name}</h3>
        <p className="text-[13px] text-[#666666] mb-1">{tool.description}</p>
        <div className="flex gap-4 text-xs text-[#999999]">
          {tool.meta.map((item, idx) => (
            <span key={idx}>
              {item.label} {item.value}
            </span>
          ))}
        </div>
      </div>

      {/* 액션 버튼 */}
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {tool.secondaryAction && (
          <Button
            variant="outline"
            size="sm"
            className="h-8 text-[13px] border-[#e5e5e5] hover:border-[#666666]"
          >
            {tool.secondaryAction}
          </Button>
        )}
        <Button
          size="sm"
          className="h-8 text-[13px] bg-[#ff6b35] hover:bg-[#ff6b35]/90"
        >
          {tool.primaryAction}
        </Button>
      </div>
    </div>
  );
}
