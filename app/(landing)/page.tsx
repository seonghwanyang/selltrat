import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-5xl font-bold text-center mb-6">
          머릿속 번쩍이던 그 순간을
          <br />
          <span className="text-orange-500">붙잡아 보세요</span>
        </h1>
        <p className="text-xl text-gray-600 text-center mb-8 max-w-2xl">
          AI 멀티에이전트가 당신의 아이디어를 30분 안에 완전한 사업계획서로
          변환합니다
        </p>
        <div className="flex gap-4">
          <Link href="/signup">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              무료로 시작하기
            </Button>
          </Link>
          <Link href="/features">
            <Button size="lg" variant="outline">
              기능 둘러보기
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
