export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center space-y-4 border border-gray-200">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Xin chào! 👋
        </h1>
        <p className="text-xl font-medium text-gray-800">
          Họ và tên: <span className="text-blue-500">Nguyễn Trần Mai Linh</span>
        </p>
        <p className="text-xl font-medium text-gray-800">
          MSSV: <span className="text-blue-500">2212403</span>
        </p>
        <p className="text-xl font-medium text-gray-800">
          Môn: Các công nghệ mới trong PTPM
        </p>
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-green-600 font-bold bg-green-50 py-3 px-6 rounded-full inline-block">
            🚀 Đây là project Next.JS đầu tiên của tôi!
          </p>
        </div>
      </div>
    </main>
  );
}