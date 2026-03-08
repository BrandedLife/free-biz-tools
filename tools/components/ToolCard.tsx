import Link from "next/link";
import { Tool } from "@/tools/data/tools";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-gray-400 hover:bg-gray-50"
    >
      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
        {tool.category}
      </p>
      <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">
        {tool.description}
      </p>
    </Link>
  );
}