"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Sparkles } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  sender: "user" | "ai";
  content: string;
  time: string;
}

export function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const newMessage: Message = {
      id: String(messages.length + 1),
      sender: "user",
      content: inputMessage,
      time: new Date().toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, newMessage]);
    setInputMessage("");

    // Simulate AI response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: String(prevMessages.length + 1),
          sender: "ai",
          content: "질문에 대한 답변을 준비 중입니다...",
          time: new Date().toLocaleTimeString("ko-KR", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 1000);
  };

  return (
    <Card className="flex flex-col h-full border-[#e5e5e5] shadow-sm">
      <div className="p-5 border-b border-[#e5e5e5]">
        <h2 className="text-lg font-semibold text-[#1a1a1a]">AI 비서</h2>
      </div>

      <ScrollArea className="flex-1 p-5">
        <div className="space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-[#666666] text-sm">
              <Sparkles className="w-8 h-8 text-[#999999] mb-2" />
              대화를 시작해보세요.
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex items-start gap-3",
                  message.sender === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.sender === "ai" && (
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-[#ff6b35] text-white">
                      AI
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    "p-3 rounded-lg max-w-[70%]",
                    message.sender === "user"
                      ? "bg-[#ff6b35] text-white rounded-br-none"
                      : "bg-[#f0f0f0] text-[#1a1a1a] rounded-bl-none"
                  )}
                >
                  <p className="text-[13px]">{message.content}</p>
                  <span
                    className={cn(
                      "block text-right text-xs mt-1",
                      message.sender === "user"
                        ? "text-white/80"
                        : "text-[#999999]"
                    )}
                  >
                    {message.time}
                  </span>
                </div>
                {message.sender === "user" && (
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-[#4285f4] text-white">
                      ME
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))
          )}
        </div>
      </ScrollArea>

      <div className="p-5 border-t border-[#e5e5e5] flex items-center gap-3">
        <Input
          placeholder="메시지를 입력하세요..."
          className="flex-1 border-[#e5e5e5] text-[#1a1a1a]"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <Button
          size="icon"
          onClick={handleSendMessage}
          className="bg-[#ff6b35] hover:bg-[#ff6b35]/90"
        >
          <Send className="w-5 h-5" />
        </Button>
      </div>
    </Card>
  );
}
