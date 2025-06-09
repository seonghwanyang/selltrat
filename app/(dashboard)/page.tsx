import { DashboardLayout } from "@/components/shared/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-6">대시보드</h2>
        <p>환영합니다! 이곳에서 새로운 사업 아이디어를 시작할 수 있습니다.</p>
      </div>
    </DashboardLayout>
  );
}
