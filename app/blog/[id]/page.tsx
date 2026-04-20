import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "../../../data/posts";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = getPostBySlug(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/blog" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 transition-all shadow-sm hover:shadow-md">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Quay lại danh sách
        </Link>
      </div>

      <article className="rounded-[3rem] border border-slate-200/80 bg-white/80 backdrop-blur-2xl shadow-2xl shadow-emerald-200/20 dark:border-slate-800 dark:bg-slate-900/80 overflow-hidden relative">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-emerald-100/50 to-transparent dark:from-emerald-900/20 pointer-events-none"></div>
        
        <div className="p-8 md:p-14 relative z-10">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6 ring-1 ring-emerald-200 dark:ring-emerald-800">{post.category}</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 capitalize text-slate-900 dark:text-white leading-[1.15] tracking-tight">{post.title}</h1>
          
          <div className="flex flex-col md:flex-row md:items-center gap-5 mb-12 text-sm text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/30 p-4 md:p-5 rounded-2xl border border-slate-100 dark:border-slate-700/50">
            <span className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-2xl shrink-0 shadow-inner ring-2 ring-white dark:ring-slate-800">🧑‍💻</span>
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-base md:text-lg">{post.author}</p>
              <p className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg> {post.date}</p>
            </div>
          </div>
          
          <div className="prose prose-emerald prose-lg max-w-none text-slate-700 dark:text-slate-300 whitespace-pre-line mb-16 leading-relaxed first-letter:text-6xl first-letter:font-black first-letter:text-emerald-600 dark:first-letter:text-emerald-400 first-letter:float-left first-letter:mr-3 first-letter:mt-1.5">
            {post.content}
          </div>
          
          <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/80 dark:to-slate-800/30 p-8 border border-slate-200/60 dark:border-slate-700">
            <h3 className="font-extrabold text-2xl mb-4 text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-emerald-500">✨</span> Về tác giả
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-slate-700 dark:text-slate-300 text-lg">
                <strong className="text-slate-900 dark:text-white font-bold">{post.author}</strong> <span className="text-slate-500 text-sm font-medium">(@mailinh)</span>
              </p>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Sinh viên CNTT - Đại học Đà Lạt</p>
              <blockquote className="mt-4 border-l-4 border-emerald-400 bg-emerald-50/50 dark:bg-emerald-900/20 p-4 rounded-r-xl text-slate-600 dark:text-slate-400 italic font-medium">
                "Đam mê khai phá sức mạnh của dữ liệu, Machine Learning và phát triển hệ thống phần mềm hiện đại."
              </blockquote>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}