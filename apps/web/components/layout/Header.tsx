"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "대시보드" },
  { href: "/reports", label: "보고서" },
  { href: "/community", label: "커뮤니티" },
  { href: "/education", label: "교육" },
  { href: "/settings", label: "설정" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="h-16 bg-white border-b border-[#e5e5e5] px-8">
      <div className="h-full flex items-center justify-between">
        {/* 로고 */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#ff6b35] rounded-lg flex items-center justify-center text-white font-bold text-lg">
            S
          </div>
          <span className="text-xl font-bold text-[#1a1a1a]">Selltrat</span>
        </div>

        {/* 네비게이션 */}
        <nav className="flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors",
                pathname === item.href
                  ? "text-[#1a1a1a]"
                  : "text-[#666666] hover:text-[#1a1a1a]"
              )}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-[#ff6b35]" />
              )}
            </Link>
          ))}
        </nav>

        {/* 우측 액션 */}
        <div className="flex items-center gap-5">
          <Button
            size="icon"
            variant="ghost"
            className="relative w-10 h-10 border border-[#e5e5e5] hover:border-[#666666]"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#ff6b35] rounded-full" />
          </Button>

          <button className="flex items-center gap-3 px-4 py-2 border border-[#e5e5e5] rounded-lg hover:border-[#666666] transition-colors">
            <div className="w-7 h-7 bg-[#ff6b35] rounded-md flex items-center justify-center text-white text-sm font-semibold">
              김
            </div>
            <span className="text-sm">김창업</span>
          </button>
        </div>
      </div>
    </header>
  );
}
