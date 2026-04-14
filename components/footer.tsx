export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center text-slate-500 text-sm space-y-3">
        <p className="text-slate-600 dark:text-slate-400">© 2026 - Nguyễn Trần Mai Linh (2212403) | CTK46</p>
        <p className="flex flex-col items-center justify-center gap-4 text-emerald-700 font-medium dark:text-emerald-400 sm:flex-row">
          <a href="https://github.com/linh472212" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-900 dark:hover:text-emerald-200 hover:underline transition-colors">
            GitHub
          </a>
          <a href="mailto:ntmailin@sv.dlu.edu.vn" className="hover:text-emerald-900 dark:hover:text-emerald-200 hover:underline transition-colors">
            Email
          </a>
        </p>
      </div>
    </footer>
  );
}
