export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  details: string;
}

export const projects: Project[] = [
  {
    id: "ebook2latex",
    title: "Ebook2Latex",
    description: "Hệ thống chuyển đổi định dạng sách điện tử sang LaTeX.",
    tech: ["Docker", "FastAPI", "React", "LaTeX"],
    details: "Dự án này sử dụng FastAPI làm backend và React làm frontend. Hệ thống được đóng gói hoàn toàn bằng Docker để dễ dàng triển khai. Chức năng chính là phân tích cú pháp sách điện tử (EPUB, PDF) và tạo ra mã nguồn LaTeX chuẩn cấu trúc phục vụ in ấn."
  },
  {
    id: "ml-models",
    title: "Mô hình Phân loại Học máy",
    description: "Xây dựng các mô hình học máy để phân tích dữ liệu.",
    tech: ["Python", "Scikit-learn", "TensorFlow"],
    details: "Áp dụng các thuật toán Linear Regression, Naive Bayes và CNN (Convolutional Neural Network) để phân tích tập dữ liệu mẫu. Kết quả thực nghiệm cho thấy mô hình CNN đạt độ chính xác cao nhất trong việc phân loại hình ảnh."
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}