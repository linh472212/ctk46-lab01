import { Badge } from "@/components/ui/badge";

export default function SkillsPage() {
  const skills = [
    "Python", "Machine Learning", "Data Science", "Scikit-learn", 
    "TensorFlow", "FastAPI", "Docker", "React", "Next.JS", "Tailwind CSS"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
      <div className="relative rounded-[3rem] border border-slate-200 bg-white/60 backdrop-blur-xl p-8 sm:p-16 shadow-2xl shadow-emerald-200/20 dark:border-slate-800 dark:bg-slate-900/60 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 dark:bg-emerald-600/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 font-bold mb-4">Kho vũ khí</p>
          <h1 className="text-4xl md:text-5xl font-extrabold dark:text-white tracking-tight mb-6">Kỹ năng chuyên môn</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Dưới đây là những công cụ, ngôn ngữ và framework mình đã rèn luyện và áp dụng vào các dự án thực tế trong quá trình học tập.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="px-6 py-3 md:py-4 text-sm md:text-base font-bold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-200/40 hover:border-emerald-400 dark:hover:border-emerald-500 transition-all duration-300 rounded-2xl cursor-default hover:bg-emerald-50 dark:hover:bg-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2.5"></span>
                {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
