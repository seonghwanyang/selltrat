"use client";

import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Paperclip, Mic } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
  isProcessing?: boolean;
  resultCard?: {
    title: string;
    items: Array<{
      label: string;
      value: string;
    }>;
  };
  quickActions?: string[];
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content: "📑 사업계획서 작성 완료!\n\n반려동물 용품 온라인 판매 사업계획서가 완성되었습니다.",
      timestamp: new Date(),
      resultCard: {
        title: "🐾 사업계획 핵심 요약",
        items: [
          { label: "초기 투자금", value: "1,200만원" },
          { label: "월 목표 매출", value: "800만원" },
          { label: "순익률", value: "35% (월 280만원)" },
          { label: "손익분기점", value: "3.2개월" },
        ],
      },
    },
    {
      id: "2", 
      type: "user",
      content: "좋아요! OEM 업체부터 찾아야겠네요. 추천해주세요.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };
    
    setMessages([...messages, newMessage]);
    setInputValue("");
    
    // TODO: AI 응답 처리
  };

  return (
    <div className="flex flex-col h-full">
      {/* 채팅 헤더 */}
      <div className="px-6 py-5 border-b border-[#e5e5e5]">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-[#1a1a1a]">
            AI 창업 어시스턴트
          </h2>
          <div className="flex items-center gap-1.5 text-[13px] text-[#666666]">
            <span className="w-1.5 h-1.5 bg-[#0d9488] rounded-full"></span>
            온라인
          </div>
        </div>
      </div>

      {/* 메시지 영역 */}
      <ScrollArea className="flex-1">
        <div className="p-6 space-y-5">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          
          {/* 처리중 카드 예시 */}
          <ProcessingCard />
        </div>
      </ScrollArea>

      {/* 입력 영역 */}
      <div className="p-5 border-t border-[#e5e5e5]">
        <div className="flex gap-3 items-center p-3 bg-[#f5f5f5] rounded-xl">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="메시지를 입력하세요..."
            className="flex-1 bg-transparent border-0 text-sm placeholder:text-[#999999] focus-visible:ring-0"
          />
          <div className="flex gap-2">
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Paperclip className="h-4 w-4 text-[#666666]" />
            </Button>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Mic className="h-4 w-4 text-[#666666]" />
            </Button>
            <Button 
              size="icon" 
              className="h-8 w-8 bg-[#ff6b35] hover:bg-[#ff6b35]/90"
              onClick={handleSend}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 메시지 버블 컴포넌트
function MessageBubble({ message }: { message: Message }) {
  return (
    <div className={cn("flex gap-3", message.type === "user" && "flex-row-reverse")}>
      <div className={cn(
        "w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-sm",
        message.type === "ai" ? "bg-[#f5f5f5]" : "bg-[#ff6b35] text-white"
      )}>
        {message.type === "ai" ? "🤖" : "김"}
      </div>
      
      <div className="max-w-[80%] space-y-3">
        <div className={cn(
          "px-4 py-3 rounded-xl text-sm leading-relaxed",
          message.type === "ai" 
            ? "bg-[#f5f5f5] text-[#1a1a1a]" 
            : "bg-[#ff6b35] text-white"
        )}>
          {message.content.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < message.content.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
        
        {/* 결과 카드 */}
        {message.resultCard && (
          <div className="bg-white border border-[#e5e5e5] rounded-xl p-4">
            <h3 className="text-[15px] font-semibold text-[#ff6b35] mb-3">
              {message.resultCard.title}
            </h3>
            <div className="space-y-2">
              {message.resultCard.items.map((item, idx) => (
                <div key={idx} className="py-2 border-b border-[#f5f5f5] last:border-0">
                  <span className="font-semibold text-[#1a1a1a]">{item.label}</span>
                  : {item.value}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* 빠른 액션 */}
        {message.quickActions && (
          <div className="flex gap-2 flex-wrap">
            {message.quickActions.map((action, idx) => (
              <button
                key={idx}
                className="px-4 py-2 bg-white border border-[#e5e5e5] rounded-full text-[13px] text-[#666666] hover:border-[#ff6b35] hover:text-[#ff6b35] transition-colors"
              >
                {action}
              </button>
            ))}
          </div>
        )}
        
        <div className={cn(
          "text-xs text-[#999999]",
          message.type === "user" && "text-right"
        )}>
          {new Date(message.timestamp).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
    </div>
  );
}

// 처리중 카드
function ProcessingCard() {
  return (
    <div className="bg-[#fff8f5] border border-[#ffe4d6] rounded-xl p-4">
      <div className="flex items-center gap-2 font-semibold text-[#ff6b35] mb-3">
        <div className="w-4 h-4 border-2 border-[#ffe4d6] border-t-[#ff6b35] rounded-full animate-spin" />
        백그라운드 작업 진행중
      </div>
      <div className="text-[13px] text-[#666666] leading-relaxed space-y-1">
        <div>• 펫프렌즈 코리아 상세 정보 수집중...</div>
        <div>• FTA 적용 가능 여부 확인중...</div>
        <div>• 경쟁사 가격 비교 분석중...</div>
      </div>
    </div>
  );
}