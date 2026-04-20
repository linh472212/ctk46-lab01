export default function GlobalLoading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-emerald-100 border-t-emerald-600 mb-4"></div>
      <p className="text-lg font-medium text-slate-600 dark:text-slate-400 animate-pulse">
        Đang tải dữ liệu...
      </p>
    </div>
  );
}