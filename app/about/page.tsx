export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Giới thiệu</h1>
      <div className="space-y-4 text-gray-700">
        <p>
          Xin chào! Tôi là <strong>Nguyễn Trần Mai Linh</strong>, sinh viên ngành Công nghệ Thông tin tại Đại học Đà Lạt.
        </p>
        <p>
          Tôi có niềm đam mê đặc biệt với Dữ liệu, Machine Learning và phát triển các hệ thống phần mềm hiện đại.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Học vấn</h2>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="font-medium">Đại học Đà Lạt</p>
          <p className="text-gray-500">MSSV: 2212403</p>
        </div>
      </div>
    </div>
  );
}
