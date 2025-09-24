export const metadata = { title: "OKR" };

export default function OKRPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">OKR</h1>
      <p className="text-gray-600">목표(Objective), 핵심결과(Key Result), 이니셔티브 관리 화면</p>
      <div className="rounded border bg-white p-4 text-sm text-gray-700">
        초기 버전: 목록/상세/체크인 플로우를 순차 구현합니다.
      </div>
    </section>
  );
}
