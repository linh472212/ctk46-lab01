"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <div className="text-8xl mb-6 animate-bounce">⚠️</div>
      <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Đã có lỗi xảy ra</h2>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 text-center max-w-md">
        Hệ thống đang gặp sự cố. Xin vui lòng thử lại sau.
      </p>
      <Button onClick={() => reset()} size="lg" className="bg-emerald-600 hover:bg-emerald-700 rounded-full px-8 font-bold shadow-lg shadow-emerald-500/30">
        Tải lại trang
      </Button>
    </div>
  );
}