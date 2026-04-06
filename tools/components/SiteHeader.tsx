"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "All Tools" },
  { href: "/tools/category/pricing", label: "Pricing" },
  { href: "/tools/category/ecommerce", label: "Ecommerce" },
  { href: "/tools/category/business", label: "Business" },
  { href: "/tools/category/marketing", label: "Marketing" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-gray-900"
        >
          Free Biz Tools
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex flex-wrap gap-4 text-sm font-medium text-gray-600">
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

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-gray-700 transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-gray-700 transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-gray-700 transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-gray-100 bg-white px-6 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}