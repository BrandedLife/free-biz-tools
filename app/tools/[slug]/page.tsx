import { notFound } from "next/navigation";
import { tools } from "@/tools/data/tools";
import { toolRegistry } from "@/tools/components/toolRegistry";
import RelatedTools from "@/tools/components/RelatedTools";
import MdxContent from "@/tools/components/MdxContent";
import fs from "fs";
import path from "path";

export function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const tool = tools.find((t) => t.slug === slug);

  if (!tool) {
    return {};
  }

  return {
    title: `${tool.name} | Free Biz Tools`,
    description: `${tool.description} Use this free calculator to get a quick answer.`,
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
    openGraph: {
      title: `${tool.name} | Free Biz Tools`,
      description: `${tool.description} Use this free calculator to get a quick answer.`,
      url: `/tools/${tool.slug}`,
      siteName: "Free Biz Tools",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${tool.name} | Free Biz Tools`,
      description: `${tool.description} Use this free calculator to get a quick answer.`,
    },
  };
}

function getToolContent(slug: string) {
  const filePath = path.join(process.cwd(), "tools", "content", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return fs.readFileSync(filePath, "utf8");
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const tool = tools.find((t) => t.slug === slug);

  if (!tool) {
    notFound();
  }

  const content = getToolContent(slug);

  if (!content) {
    notFound();
  }

  const CalculatorComponent = toolRegistry[slug];

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    url: `/tools/${tool.slug}`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="mb-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-500">
          {tool.category}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          {tool.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          {tool.description}
        </p>
      </header>

      <section className="mb-12">
        {CalculatorComponent ? (
          <CalculatorComponent />
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-gray-600">Calculator UI coming next.</p>
          </div>
        )}
      </section>

      <section className="mb-12 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">
          How it works
        </h2>

        <MdxContent source={content} />
      </section>

      <RelatedTools relatedSlugs={tool.related} />
    </main>
  );
}