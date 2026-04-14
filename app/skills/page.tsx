export default function SkillsPage() {
  const skills = [
    "Python", "Machine Learning", "Data Science", "Scikit-learn", 
    "TensorFlow", "FastAPI", "Docker", "React", "Next.JS", "Tailwind CSS"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-2xl shadow-emerald-200/20 dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 font-semibold mb-3">Kỹ năng</p>
          <h1 className="text-4xl font-bold dark:text-white">Kỹ năng chuyên môn</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Những công cụ và kỹ thuật mình đã sử dụng nhiều nhất trong dự án và học tập.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-emerald-500 dark:hover:bg-emerald-950/50">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
