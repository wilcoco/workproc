"use client";

import { useEffect, useState } from "react";

type Props = {
  endpoint: string;
  label: string;
};

export default function StatusCard({ endpoint, label }: Props) {
  const [status, setStatus] = useState<"idle" | "ok" | "fail">("idle");
  const [info, setInfo] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    fetch(endpoint)
      .then(async (r) => {
        const json = await r.json().catch(() => ({}));
        if (!mounted) return;
        setInfo(json);
        setStatus(r.ok ? "ok" : "fail");
      })
      .catch(() => mounted && setStatus("fail"));
    return () => {
      mounted = false;
    };
  }, [endpoint]);

  return (
    <div className="rounded-md border bg-white p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-500">{label}</div>
          <div className="text-lg font-medium break-all text-gray-800">{endpoint}</div>
        </div>
        <span
          className={
            status === "ok"
              ? "h-2.5 w-2.5 rounded-full bg-green-500"
              : status === "fail"
              ? "h-2.5 w-2.5 rounded-full bg-red-500"
              : "h-2.5 w-2.5 rounded-full bg-gray-300"
          }
        />
      </div>
      {info && (
        <pre className="mt-3 whitespace-pre-wrap break-words text-xs text-gray-600">
          {JSON.stringify(info, null, 2)}
        </pre>
      )}
    </div>
  );
}
