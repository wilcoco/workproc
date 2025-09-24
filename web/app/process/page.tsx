import ProcessEditor from "@/components/ProcessEditor";

export const metadata = { title: "프로세스" };

export default function ProcessPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">프로세스</h1>
      <p className="text-gray-600">업무 프로세스 시각화 에디터/보기</p>
      <ProcessEditor />
      <p className="text-xs text-gray-500">노드를 드래그하거나 엣지를 연결해 보세요.</p>
    </section>
  );
}
