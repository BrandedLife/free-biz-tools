import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Free Biz Tools</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Free calculators for pricing, ecommerce, marketing, and business
            planning.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
            Browse
          </h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
            <Link href="/tools" className="hover:text-gray-900">
              All Tools
            </Link>
            <Link href="/tools/category/pricing" className="hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/tools/category/ecommerce" className="hover:text-gray-900">
              Ecommerce
            </Link>
            <Link href="/tools/category/business" className="hover:text-gray-900">
              Business
            </Link>
            <Link href="/tools/category/marketing" className="hover:text-gray-900">
              Marketing
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
            Info
          </h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
            <Link href="/sitemap.xml" className="hover:text-gray-900">
              Sitemap
            </Link>
            <Link href="/robots.txt" className="hover:text-gray-900">
              Robots
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-4 text-sm text-gray-500">
          © 2026 Free Biz Tools. All rights reserved.
        </div>
      </div>
    </footer>
  );
}