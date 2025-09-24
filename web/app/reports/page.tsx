export const metadata = { title: "리포트" };

export default function ReportsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">리포트</h1>
      <p className="text-gray-600">OKR 진행률, 히트맵/추세, 리스크 요약</p>
      <div className="rounded border bg-white p-4 text-sm text-gray-700">
        초기 버전: 간단한 카드/차트 자리 표시자 구성 예정입니다.
      </div>
    </section>
  );
}
