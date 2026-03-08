import { MDXRemote } from "next-mdx-remote/rsc";

type MdxContentProps = {
  source: string;
};

export default function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose prose-gray max-w-none">
      <MDXRemote source={source} />
    </div>
  );
}