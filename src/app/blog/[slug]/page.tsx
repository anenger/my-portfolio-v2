import type { Metadata } from "next";
import Link from "next/link";

import { EndMark } from "@/components/EndMark";
import { ReadingProgress } from "@/components/ReadingProgress";
import { formatDate, getPost, getPosts } from "@/lib/posts";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { post } = await getPost(slug);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const { post, Content } = await getPost(slug);

  return (
    <article className="pt-8">
      <Link
        href="/blog"
        className="text-subtle hover:text-foreground text-sm transition-colors"
      >
        ← Blog
      </Link>
      <header className="mt-8 mb-10">
        <h1 className="text-foreground text-2xl font-medium tracking-tight">
          {post.title}
        </h1>
        <p className="text-subtle mt-2 font-mono text-xs">
          <time dateTime={post.date}>{formatDate(post.date)}</time> ·{" "}
          {post.readingMinutes} min read
        </p>
      </header>
      <ReadingProgress />
      <div className="mdx">
        <Content />
      </div>
      <EndMark />
    </article>
  );
}
