"use client";

import { useState } from "react";
import { Button } from "../../src/components/ui/button";
import { Input } from "../../src/components/ui/input";
import { Card } from "../../src/components/ui/card";
import { ScrollArea } from "../../src/components/ui/scroll-area";

export function ChatInterface() {
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'ai'}>>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { text: input, sender: 'user' }]);
    // TODO: Add AI response logic
    setInput("");
  };

  return (
    <Card className="h-full flex flex-col">
      <div className="p-4 border-b">
        <h3 className="font-semibold">AI Assistant</h3>
      </div>
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-lg ${
                msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t flex gap-2">
        <Input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </Card>
  );
}