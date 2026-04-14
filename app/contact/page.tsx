export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Liên hệ</h1>
      <div className="bg-gray-50 rounded-lg p-6 space-y-3 text-gray-700">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:ntmailin@sv.dlu.edu.vn" className="text-blue-600 hover:underline">
            ntmailin@sv.dlu.edu.vn
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/linh472212" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            github.com/linh472212
          </a>
        </p>
      </div>
    </div>
  );
}