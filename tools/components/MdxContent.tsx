import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

type MdxContentProps = {
  source: string;
};

const components = {
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => {
    if (href?.startsWith("/")) {
      return <Link href={href}>{children}</Link>;
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  },
};

export default function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose prose-gray max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  );
}