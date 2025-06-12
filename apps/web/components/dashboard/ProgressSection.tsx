"use client";

import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Circle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Stage {
  id: string;
  number: number;
  name: string;
  tasks: string;
  status: "completed" | "active" | "pending";
}

const stages: Stage[] = [
  {
    id: "1",
    number: 1,
    name: "시장조사",
    tasks: "시장 규모 분석 • 경쟁사 분석 • 트렌드 분석",
    status: "completed",
  },
  {
    id: "2", 
    number: 2,
    name: "사업계획",
    tasks: "수익 모델 설계 • 투자 계획 수립 • 리스크 분석",
    status: "completed",
  },
  {
    id: "3",
    number: 3,
    name: "소싱/구매",
    tasks: "OEM 업체 선정 • 견적 비교 • 샘플 검증",
    status: "active",
  },
  {
    id: "4",
    number: 4,
    name: "마케팅 준비",
    tasks: "브랜드 개발 • 판매 채널 구축 • 광고 전략 수립",
    status: "pending",
  },
  {
    id: "5",
    number: 5,
    name: "런칭",
    tasks: "상품 등록 • 물류 셋업 • 고객 서비스 준비",
    status: "pending",
  },
];

export function ProgressSection() {
  const completedStages = stages.filter(s => s.status === "completed").length;
  const progressPercentage = (completedStages / stages.length) * 100;

  return (
    <Card className="p-6 border-[#e5e5e5] shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-[#1a1a1a]">창업 로드맵</h2>
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f5f5f5] rounded-full">
          <span className="w-1.5 h-1.5 bg-[#0d9488] rounded-full"></span>
          <span className="text-xs text-[#666666]">실시간 업데이트</span>
        </div>
      </div>

      {/* 전체 진행률 */}
      <div className="mb-8">
        <div className="flex items-baseline justify-between mb-3">
          <span className="text-sm text-[#666666]">전체 진행률</span>
          <span className="text-[28px] font-bold text-[#1a1a1a]">45%</span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
        <div className="flex justify-between mt-3 text-[13px] text-[#666666]">
          <span>시작: 2025년 1월 1일</span>
          <span>예상 완료: 35일 후</span>
        </div>
      </div>

      {/* 단계별 카드 */}
      <div className="space-y-3">
        {stages.map((stage) => (
          <StageCard key={stage.id} stage={stage} />
        ))}
      </div>
    </Card>
  );
}

function StageCard({ stage }: { stage: Stage }) {
  return (
    <div className={cn(
      "flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer",
      stage.status === "completed" && "bg-[#f0fdf4] border-[#bbf7d0]",
      stage.status === "active" && "bg-[#fff8f5] border-[#ffe4d6] shadow-sm",
      stage.status === "pending" && "bg-[#f5f5f5] border-[#e5e5e5]",
      "hover:translate-x-1"
    )}>
      {/* 단계 번호 */}
      <div className={cn(
        "w-10 h-10 rounded-[10px] flex items-center justify-center font-bold text-base",
        stage.status === "completed" && "bg-[#0d9488] text-white",
        stage.status === "active" && "bg-[#ff6b35] text-white",
        stage.status === "pending" && "bg-white text-[#666666]"
      )}>
        {stage.status === "completed" ? (
          <CheckCircle2 className="w-5 h-5" />
        ) : stage.status === "active" ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          stage.number
        )}
      </div>

      {/* 단계 내용 */}
      <div className="flex-1">
        <div className="font-semibold text-[#1a1a1a] mb-1">{stage.number}단계: {stage.name}</div>
        <div className="text-[13px] text-[#666666]">{stage.tasks}</div>
      </div>

      {/* 상태 표시 */}
      <div className={cn(
        "px-3 py-1 rounded-full text-xs font-medium",
        stage.status === "completed" && "bg-[#0d9488] text-white",
        stage.status === "active" && "bg-[#ff6b35] text-white",
        stage.status === "pending" && "bg-[#f5f5f5] text-[#666666]"
      )}>
        {stage.status === "completed" && "완료"}
        {stage.status === "active" && "진행중"}
        {stage.status === "pending" && "대기중"}
      </div>
    </div>
  );
}