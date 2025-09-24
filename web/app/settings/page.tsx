export const metadata = { title: "설정" };

export default function SettingsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">설정</h1>
      <p className="text-gray-600">프로필, 팀, 권한 설정</p>
      <div className="rounded border bg-white p-4 text-sm text-gray-700">
        초기 버전: 기본 프로필/팀 정보 표시 예정입니다.
      </div>
    </section>
  );
}
