import { tools } from "@/tools/data/tools";
import ToolCard from "@/tools/components/ToolCard";

export default function RelatedTools({
  relatedSlugs,
}: {
  relatedSlugs: string[];
}) {
  const relatedTools = relatedSlugs
    .map((slug) => tools.find((tool) => tool.slug === slug))
    .filter((tool): tool is NonNullable<typeof tool> => Boolean(tool));

  if (!relatedTools.length) {
    return null;
  }

  return (
    <section className="mt-14">
      <div className="mb-6">
        <p className="eyebrow">Continue exploring</p>
        <h2 className="mt-3 section-title">Related calculators</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
          Explore the next calculations most relevant to this topic.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {relatedTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  );
}