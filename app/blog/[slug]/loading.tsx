export default function BlogPostLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 animate-pulse">
      <div className="h-8 w-48 bg-slate-200 rounded-full mb-6"></div>
      <div className="h-6 w-32 bg-slate-200 rounded-full mb-10"></div>
      <div className="space-y-4">
        <div className="h-5 w-full bg-slate-200 rounded-full"></div>
        <div className="h-5 w-full bg-slate-200 rounded-full"></div>
        <div className="h-5 w-5/6 bg-slate-200 rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-10">
        <div className="h-40 bg-slate-200 rounded-3xl"></div>
        <div className="h-40 bg-slate-200 rounded-3xl"></div>
      </div>
    </div>
  );
}
