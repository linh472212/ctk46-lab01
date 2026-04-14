import Link from "next/link";

export default function HomePage() {
  const skills = [
    "Python", "Machine Learning", "Data Science", "Scikit-learn", 
    "TensorFlow", "FastAPI", "Docker", "React", "Next.JS", "Tailwind CSS"
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Hero section */}
      <div className="text-center mb-16">
        <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="text-4xl">👩‍💻</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
          Xin chào! Tôi là <span className="text-emerald-600 dark:text-emerald-400">Nguyễn Trần Mai Linh</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Sinh viên Công nghệ Thông tin tại Đại học Đà Lạt. Đam mê phân tích dữ liệu, Machine Learning và phát triển hệ thống phần mềm.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/projects" className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm">
            Xem dự án
          </Link>
          <Link href="/contact" className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors dark:text-gray-300">
            Liên hệ
          </Link>
        </div>
      </div>

      {/* Skills section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">Kỹ năng chuyên môn</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
             <div key={skill} className="bg-gray-50 dark:bg-gray-800/50 border border-transparent dark:border-gray-700 rounded-lg p-4 text-center hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors dark:text-gray-200 shadow-sm cursor-default">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-emerald-50 dark:bg-gray-800/50 border border-emerald-100 dark:border-gray-700 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3 dark:text-white">Đọc Blog của tôi</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Nơi mình chia sẻ kiến thức và kinh nghiệm về công nghệ, dữ liệu</p>
        <Link href="/blog" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
          Xem blog →
        </Link>
      </div>
    </div>
  );
}
