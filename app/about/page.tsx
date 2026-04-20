import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">Câu chuyện của mình</h1>
        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
      </div>

      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-12">
          <Avatar className="w-40 h-40 md:w-48 md:h-48 border-4 border-white dark:border-slate-800 shadow-xl flex-shrink-0">
            <AvatarImage src="/mailin.jpg" alt="Nguyễn Trần Mai Linh" className="object-cover" />
            <AvatarFallback className="bg-emerald-100 text-emerald-600 text-4xl font-bold">ML</AvatarFallback>
          </Avatar>
          <div className="space-y-5 text-lg text-slate-600 dark:text-slate-300 text-center md:text-left leading-relaxed">
            <p>
              Xin chào! Mình là <strong className="text-emerald-600 dark:text-emerald-400 font-bold text-xl">Nguyễn Trần Mai Linh</strong>.
            </p>
            <p>
              Hiện tại, mình đang theo học ngành <strong>Công nghệ Thông tin</strong> tại Đại học Đà Lạt. Hành trình đến với công nghệ của mình bắt nguồn từ sự tò mò về cách những dòng code có thể giải quyết các bài toán thực tế phức tạp.
            </p>
            <p>
              Trọng tâm nghiên cứu và phát triển của mình nằm ở <strong>Khoa học Dữ liệu (Data Science)</strong>, <strong>Machine Learning</strong> và xây dựng các kiến trúc phần mềm hiện đại (Web Development).
            </p>
          </div>
        </div>

        <Separator className="my-10" />
        <div>
          <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-3 justify-center md:justify-start">
            <span className="p-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg">🎓</span> Hành trình học vấn
          </h2>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 flex items-start gap-5 hover:border-emerald-300 dark:hover:border-emerald-600 transition-colors">
            <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-xl shadow-sm flex items-center justify-center text-2xl flex-shrink-0 border border-slate-100 dark:border-slate-600">🏛️</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Đại học Đà Lạt</h3>
              <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-2">Cử nhân Công nghệ Thông tin</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">MSSV: <span className="font-mono bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300">2212403</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}