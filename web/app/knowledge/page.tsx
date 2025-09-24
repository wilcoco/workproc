export const metadata = { title: "노하우" };

export default function KnowledgePage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">노하우</h1>
      <p className="text-gray-600">지식 문서(리치 텍스트/Markdown), 태그, 검색</p>
      <div className="rounded border bg-white p-4 text-sm text-gray-700">
        초기 버전: Markdown 기반 에디터를 도입 예정입니다.
      </div>
    </section>
  );
}
