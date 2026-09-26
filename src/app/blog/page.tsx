import type { Metadata } from "next";

import { PostList } from "@/components";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on software engineering, tools, and whatever else.",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="pt-8">
      <h1 className="text-foreground text-2xl font-medium tracking-tight">
        Blog
      </h1>
      <p className="text-muted mt-3 mb-12">
        Notes on software engineering, tools, and whatever else.
      </p>
      <PostList posts={posts} />
    </section>
  );
}
