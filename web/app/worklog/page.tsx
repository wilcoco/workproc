export const metadata = { title: "업무일지" };

export default function WorkLogPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">업무일지</h1>
      <p className="text-gray-600">일/주간 로그 작성 및 OKR/프로세스 연결</p>
      <div className="rounded border bg-white p-4 text-sm text-gray-700">
        초기 버전: 템플릿(어제/오늘/리스크/도움필요) 추가 예정입니다.
      </div>
    </section>
  );
}
