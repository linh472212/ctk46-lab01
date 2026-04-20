import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const skills = [
    "Python", "Machine Learning", "Data Science", "Scikit-learn", 
    "TensorFlow", "FastAPI", "Docker", "React", "Next.JS", "Tailwind CSS"
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24 space-y-24">
      <div className="text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-emerald-400/20 dark:bg-emerald-600/20 blur-[100px] rounded-full -z-10 pointer-events-none animate-pulse"></div>
        
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-[2.5rem] rotate-3 hover:rotate-6 transition-transform duration-500 mx-auto mb-10 shadow-2xl shadow-emerald-200/50 dark:shadow-emerald-900/20 ring-4 ring-white/60 dark:ring-slate-800/50 relative overflow-hidden group cursor-default">
          <Image
            src="/mailin.jpg"
            alt="Nguyễn Trần Mai Linh"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight">
          Xin chào! Tôi là <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-400 background-animate">Nguyễn Trần Mai Linh</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Sinh viên ngành Công nghệ Thông tin tại Đại học Đà Lạt. Đam mê khai phá sức mạnh của dữ liệu, Machine Learning và phát triển hệ thống phần mềm hiện đại.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/projects" className="inline-flex items-center gap-2.5 bg-emerald-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:-translate-y-1">
            Xem dự án
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" /></svg>
          </Link>
          <Link href="/contact" className="border-2 border-slate-200 dark:border-slate-800 px-8 py-3.5 rounded-full font-semibold hover:border-emerald-500 hover:text-emerald-600 dark:hover:border-emerald-400 dark:hover:text-emerald-400 transition-all dark:text-slate-200 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:-translate-y-1">
            Liên hệ
          </Link>
          <Link href="/countries" className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-1 flex items-center gap-2">
            🌍 Khám phá Quốc gia
          </Link>
        </div>
      </div>
      
      <div>
        <div className="text-center mb-10">
          <h2 className="text-sm uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold mb-2">Chuyên môn của tôi</h2>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Công nghệ & Kỹ năng</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {skills.map((skill) => (
             <div key={skill} className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-3 text-center hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:border-emerald-300 dark:hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all dark:text-slate-300 shadow-sm hover:shadow-md cursor-default text-sm md:text-base font-medium">
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl shadow-emerald-600/20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">Khám phá góc chia sẻ của tôi</h2>
        <p className="text-emerald-100 mb-8 max-w-xl mx-auto text-lg relative z-10">Nơi mình đúc kết lại những kiến thức, kinh nghiệm thực tế về lập trình và khoa học dữ liệu.</p>
        <Link href="/blog" className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 relative z-10">
          Đọc Blog Ngay
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </Link>
      </div>

      {/* Banner liên kết sang trang API Quốc gia */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl shadow-blue-600/20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">🌍 Tích hợp API Thực tế (REST Countries)</h2>
        <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg relative z-10">Khám phá dữ liệu hơn 250 quốc gia trên toàn thế giới được fetch trực tiếp từ Public API với Next.js Server Components.</p>
        <Link href="/countries" className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 relative z-10">
          Xem danh sách Quốc gia
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
        </Link>
      </div>
    </div>
  );
}