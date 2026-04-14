import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById } from "../../../data/projects";

interface ProjectDetailPageProps {
  params: { id: string };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/projects" className="text-blue-600 hover:underline text-sm mb-6 inline-block">
        ← Quay lại danh sách
      </Link>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <div className="flex gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="bg-emerald-100 text-emerald-700 text-sm px-3 py-1 rounded-full">
            {t}
          </span>
        ))}
      </div>
      <div className="text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg border">
        {project.details}
      </div>
    </div>
  );
}