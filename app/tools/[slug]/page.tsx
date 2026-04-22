import { notFound } from "next/navigation";
import { tools } from "@/tools/data/tools";
import { toolRegistry } from "@/tools/components/toolRegistry";
import RelatedTools from "@/tools/components/RelatedTools";
import MdxContent from "@/tools/components/MdxContent";
import fs from "fs";
import path from "path";
import Link from "next/link";

const BASE_URL = "https://free-biz-tools.com";

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

  const fullUrl = `${BASE_URL}/tools/${tool.slug}`;
  const fullDescription = `${tool.description} Use this free calculator to get a quick answer.`;

  return {
    title: `${tool.name} | Free Biz Tools`,
    description: fullDescription,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: `${tool.name} | Free Biz Tools`,
      description: fullDescription,
      url: fullUrl,
      siteName: "Free Biz Tools",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${tool.name} | Free Biz Tools`,
      description: fullDescription,
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

  const CalculatorComponent = toolRegistry[slug];
  const content = getToolContent(slug);

  const fullUrl = `${BASE_URL}/tools/${tool.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    url: fullUrl,
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@type": "Organization",
      name: "Free Biz Tools",
      url: BASE_URL,
    },
  };

  return (
    <main className="page-shell py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
            {tool.category}
          </span>

          <Link
            href={`/tools/category/${tool.category}`}
            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            Browse more in {tool.category} →
          </Link>
        </div>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
          {tool.name}
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          {tool.description}
        </p>
      </header>

      <section className="surface-card mb-12 p-6 md:p-8">
        {CalculatorComponent ? (
          <CalculatorComponent />
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-slate-600">Calculator UI coming soon.</p>
          </div>
        )}
      </section>

      <section className="surface-card mb-12 p-8 md:p-10">
        <div className="mb-6">
          <p className="eyebrow">Guide</p>
          <h2 className="mt-3 section-title">How it works</h2>
        </div>

        <div className="prose prose-slate max-w-none">
          {content ? (
            <MdxContent source={content} />
          ) : (
            <p>
              This calculator is ready to use. A full written guide for this tool
              is coming soon.
            </p>
          )}
        </div>
      </section>

      <section className="surface-card mb-12 p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow">Explore more</p>
            <h2 className="mt-3 section-title">More calculators in this topic</h2>
          </div>

          <Link
            href={`/tools/category/${tool.category}`}
            className="button-secondary"
          >
            View {tool.category} calculators
          </Link>
        </div>
      </section>

      <RelatedTools relatedSlugs={tool.related} />
    </main>
  );
}
