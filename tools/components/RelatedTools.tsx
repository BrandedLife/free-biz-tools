import Link from "next/link";
import { tools } from "@/tools/data/tools";

type RelatedToolsProps = {
  relatedSlugs: string[];
};

export default function RelatedTools({ relatedSlugs }: RelatedToolsProps) {
  const relatedTools = tools.filter((tool) => relatedSlugs.includes(tool.slug));

  if (relatedTools.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        Related tools
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {relatedTools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="rounded-xl border border-gray-200 p-4 transition hover:border-gray-400 hover:bg-gray-50"
          >
            <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
            <p className="mt-2 text-sm text-gray-600">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}