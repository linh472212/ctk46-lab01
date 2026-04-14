"use client";

import Link from "next/link";
import { useEffect } from "react";

interface RootErrorProps {
  error: Error;
  reset: () => void;
}

export default function RootError({ error, reset }: RootErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-16">
      <div className="w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-100 text-red-600 text-4xl font-bold">
            !
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Đã có lỗi xảy ra</h1>
          <p className="text-slate-600 mb-8">
            Xin lỗi bạn nhé. Ứng dụng gặp vấn đề trong quá trình xử lý.
            Bạn có thể thử tải lại trang hoặc quay về trang chủ.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => reset()}
              className="rounded-full bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-700"
            >
              Thử lại
            </button>
            <Link
              href="/"
              className="rounded-full border border-slate-200 px-6 py-3 text-slate-900 transition hover:bg-slate-50"
            >
              Về trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
