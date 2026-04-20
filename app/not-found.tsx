import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-9xl mb-8 animate-bounce">🛸</div>
      <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6">404 - Lạc đường rồi!</h1>
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        Trang bạn đang tìm kiếm dường như không tồn tại, đã bị xóa hoặc bạn đã gõ sai đường dẫn. Hãy cùng quay về trạm không gian an toàn nhé!
      </p>
      <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-10 py-6 text-lg font-bold shadow-xl shadow-emerald-500/30 transition-all hover:-translate-y-1">
        <Link href="/">
          ← Trở về Trang chủ
        </Link>
      </Button>
    </div>
  );
}
