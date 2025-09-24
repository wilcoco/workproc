import StatusCard from "@/components/StatusCard";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">workproc</h1>
      <p className="text-gray-600">
        OKR 중심으로 업무를 정의하고, 프로세스를 시각화하며, 진도와 노하우를 축적하는 업무일지.
      </p>
      <div className="rounded-md border bg-white p-4">
        <p className="text-sm text-gray-700">
          서버 상태 확인: <a className="text-blue-600 underline" href="/api/health">/api/health</a>
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <StatusCard endpoint="/api/health" label="API Health" />
        <StatusCard endpoint="/api/db/health" label="DB Health" />
      </div>
    </div>
  );
}
