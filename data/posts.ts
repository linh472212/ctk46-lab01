export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
}

export const posts: Post[] = [
  {
    slug: "gioi-thieu-nextjs",
    title: "Giới thiệu Next.JS - Framework React phổ biến nhất",
    excerpt: "Tìm hiểu tại sao Next.JS là lựa chọn hàng đầu cho phát triển web hiện đại.",
    content: "Next.JS là một React framework mạnh mẽ được phát triển bởi Vercel...\nNó cung cấp nhiều tính năng quan trọng như Server-Side Rendering (SSR), Static Site Generation (SSG), và App Router.",
    date: "2026-01-15",
    category: "Công nghệ",
    author: "Nguyễn Trần Mai Linh"
  },
  {
    slug: "hoc-tailwind-css",
    title: "Tailwind CSS - Cách tiếp cận mới cho CSS",
    excerpt: "Khám phá phương pháp utility-first CSS và tại sao nó thay đổi cách viết CSS.",
    content: "Tailwind CSS là một utility-first CSS framework, nghĩa là thay vì viết CSS tùy chỉnh, bạn sử dụng các class tiện ích có sẵn để xây dựng giao diện...",
    date: "2026-01-20",
    category: "Công nghệ",
    author: "Nguyễn Trần Mai Linh"
  },
  {
    slug: "tai-sao-chon-nextjs",
    title: "Tại sao nên chọn Next.js thay vì React thuần?",
    excerpt: "Next.js mang lại những lợi ích vượt trội về SEO và hiệu năng hiển thị.",
    content: "Khác với React thuần (CSR), Next.js cung cấp SSR (Server Side Rendering) giúp trang web tải nhanh hơn và thân thiện với các công cụ tìm kiếm. Hệ thống file-based routing cũng cực kỳ tiện lợi.",
    date: "2026-04-14",
    category: "Công nghệ",
    author: "Nguyễn Trần Mai Linh"
  },
  {
    slug: "lo-trinh-hoc-ai",
    title: "Lộ trình tự học Machine Learning cơ bản",
    excerpt: "Bắt đầu với AI và Machine Learning từ con số 0.",
    content: "Để bắt đầu, bạn cần nắm vững Python và Toán học (Đại số tuyến tính, Xác suất thống kê). Sau đó, hãy làm quen với Pandas, Scikit-learn để xây dựng các mô hình cơ bản như Linear Regression hay Decision Tree.",
    date: "2026-04-15",
    category: "Học tập",
    author: "Nguyễn Trần Mai Linh"
  }
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}