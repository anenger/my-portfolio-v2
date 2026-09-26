import Link from "next/link";

import { formatDate, type Post } from "@/lib/posts";

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
  if (posts.length === 0) {
    return <p className="text-muted">Nothing here yet. Check back soon.</p>;
  }

  return (
    <ul className="flex flex-col gap-6">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className="group block no-underline"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3
                className="text-foreground group-hover:text-accent
                  group-focus-visible:text-accent decoration-accent
                  decoration-wavy underline-offset-4 transition-colors
                  group-hover:underline group-focus-visible:underline
                  font-medium"
              >
                {post.title}
                {post.draft && (
                  <span className="text-subtle ml-2 text-xs">(draft)</span>
                )}
              </h3>
              <time
                dateTime={post.date}
                className="text-subtle shrink-0 font-mono text-xs tabular-nums"
              >
                {formatDate(post.date)}
              </time>
            </div>
            <p className="text-muted mt-1 text-sm">{post.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
