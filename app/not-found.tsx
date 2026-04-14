import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-20">
      <div className="max-w-3xl rounded-[2rem] bg-white p-10 shadow-2xl ring-1 ring-slate-200">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-blue-50 shadow-inner">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-transparent animate-pulse"></div>
            <div className="text-7xl font-black text-blue-700">404</div>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Trang không tìm thấy</h1>
            <p className="mt-3 text-slate-600">
              Có vẻ như bạn đã tìm đến một trang không tồn tại. Hãy quay lại trang chính hoặc kiểm tra lại đường dẫn.
            </p>
          </div>
          <div className="w-full rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex flex-col items-center gap-3">
              <div className="h-24 w-24 rounded-3xl bg-white shadow-md flex items-center justify-center text-5xl animate-bounce">
                🚀
              </div>
              <p className="text-slate-500">Hãy thử đi đến một trang khác hoặc trở về trang chủ.</p>
            </div>
          </div>
          <Link
            href="/"
            className="inline-flex rounded-full bg-blue-600 px-8 py-3 text-white transition hover:bg-blue-500"
          >
            Trở về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
