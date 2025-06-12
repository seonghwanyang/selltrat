"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export function RecommendationPanel() {
  return (
    <div className="p-5 bg-[#ff6b35] rounded-2xl text-white">
      <h3 className="text-base font-semibold mb-4">💡 AI 추천</h3>

      <div className="bg-white/15 rounded-xl p-4 backdrop-blur-sm">
        <div className="text-[32px] font-bold mb-1">92%</div>
        <div className="text-sm opacity-90 mb-4">펫프렌즈 코리아 적합도</div>

        <div className="text-[13px] mb-4 opacity-90 space-y-1">
          <div>예상 ROI: 340%</div>
          <div>리스크 레벨: 낮음</div>
        </div>

        <Button
          className="w-full bg-white text-[#ff6b35] hover:bg-white/90 font-semibold"
          size="sm"
        >
          상세 분석 보기
        </Button>
      </div>
    </div>
  );
}
