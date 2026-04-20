import Link from "next/link";
import { posts } from "../../data/posts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Nâng cấp UI trang Blog, Projects, Guestbook với shadcn/ui
export default function BlogPage() {

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mb-8 rounded-full opacity-70"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">Góc chia sẻ</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Những bài viết, kiến thức và kinh nghiệm được đúc kết trong quá trình học tập.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group outline-none">
            <Card className="h-full flex flex-col justify-between rounded-[2rem] border-slate-200/80 bg-white/70 backdrop-blur-md shadow-xl shadow-slate-200/30 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:shadow-emerald-200/60 group-hover:border-emerald-300 dark:border-slate-800 dark:bg-slate-900/80 dark:group-hover:border-emerald-500/50 relative overflow-hidden group-hover:ring-2 group-hover:ring-emerald-400/50 dark:group-hover:ring-emerald-500/50">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="p-8 md:p-10 pb-4">
                <Badge variant="secondary" className="w-fit mb-4 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400">
                  🏷️ {post.category}
                </Badge>
                <CardTitle className="text-2xl font-extrabold capitalize leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 md:px-10 flex-1">
                <p className="text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="px-8 md:px-10 pb-8 md:pb-10 pt-2">
                <span className="flex items-center text-sm font-bold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-2 transition-transform duration-300">
                  Đọc tiếp <svg className="w-5 h-5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}