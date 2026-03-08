import { notFound } from "next/navigation";
import { tools } from "@/tools/data/tools";
import { toolCategories } from "@/tools/data/categories";
import ToolCard from "@/tools/components/ToolCard";

export function generateStaticParams() {
  return toolCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const matchedCategory = toolCategories.find((c) => c.slug === category);

  if (!matchedCategory) {
    return {};
  }

  return {
    title: `${matchedCategory.name} | Free Biz Tools`,
    description: matchedCategory.description,
    alternates: {
      canonical: `/tools/category/${matchedCategory.slug}`,
    },
    openGraph: {
      title: `${matchedCategory.name} | Free Biz Tools`,
      description: matchedCategory.description,
      url: `/tools/category/${matchedCategory.slug}`,
      siteName: "Free Biz Tools",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${matchedCategory.name} | Free Biz Tools`,
      description: matchedCategory.description,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const matchedCategory = toolCategories.find((c) => c.slug === category);

  if (!matchedCategory) {
    notFound();
  }

  const categoryTools = tools
    .filter((tool) => tool.category === matchedCategory.slug)
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          {matchedCategory.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          {matchedCategory.description}
        </p>
        <p className="mt-3 text-sm text-gray-500">
          {categoryTools.length} tool{categoryTools.length === 1 ? "" : "s"}
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categoryTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </main>
  );
}