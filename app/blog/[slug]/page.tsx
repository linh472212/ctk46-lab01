import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "../../../data/posts";

interface BlogPostPageProps {
  params: { slug: string };
  searchParams?: { testError?: string };
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params, searchParams }: BlogPostPageProps) {
  if (searchParams?.testError === "1") {
    const broken: any = undefined;
    broken.throw();
  }

  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-6 text-sm text-gray-500">
        <span className="mr-2">{post.category}</span>
        <span className="mr-2">✏️ {post.author}</span>
        <span>• {post.date}</span>
      </div>
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <div className="prose prose-lg text-gray-700 bg-gray-50 p-8 rounded-xl border border-gray-200">
        {post.content.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}
