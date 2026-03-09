import Link from "next/link";
import { Tool } from "@/tools/data/tools";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group surface-card block p-6 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
    >
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
        {tool.category}
      </p>

      <h3 className="text-xl font-semibold tracking-tight text-slate-950 transition group-hover:text-indigo-600">
        {tool.name}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {tool.description}
      </p>

      <div className="mt-5 inline-flex items-center text-sm font-medium text-indigo-600">
        Open calculator
        <span className="ml-2 transition group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}