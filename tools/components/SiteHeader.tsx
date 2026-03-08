import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "All Tools" },
  { href: "/tools/category/pricing", label: "Pricing" },
  { href: "/tools/category/ecommerce", label: "Ecommerce" },
  { href: "/tools/category/business", label: "Business" },
  { href: "/tools/category/marketing", label: "Marketing" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          Free Biz Tools
        </Link>

        <nav className="flex flex-wrap gap-4 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}