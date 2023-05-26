"use client";

import { useGptStore } from "@/hooks/use-gpt-store";

export function GptOutput() {
  const { response } = useGptStore();

  return (
    <div className="card w-full bg-base-200 shadow-xl">
      {response && (
        <div className="card-body">
          <p className="text-sm font-mono whitespace-pre-line">{response}</p>
        </div>
      )}
      {!response && (
        <div className="card-body flex-col w-full justify-center items-center">
          <p className="text-sm font-mono text-base-content flex-grow-0">
            No response yet
          </p>
        </div>
      )}
    </div>
  );
}
