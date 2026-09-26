import fs from "node:fs/promises";
import path from "node:path";
import type { MDXContent } from "mdx/types";

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  draft?: boolean;
}

export interface Post extends PostFrontmatter {
  slug: string;
  readingMinutes: number;
}

interface PostModule {
  default: MDXContent;
  frontmatter?: unknown;
}

const postsDirectory = path.join(process.cwd(), "src/content/posts");
const wordsPerMinute = 225;

const isPostFrontmatter = (value: unknown): value is PostFrontmatter => {
  if (typeof value !== "object" || value === null) return false;
  const data = value as Record<string, unknown>;
  return (
    typeof data.title === "string" &&
    typeof data.description === "string" &&
    typeof data.date === "string" &&
    !Number.isNaN(Date.parse(data.date)) &&
    (data.draft === undefined || typeof data.draft === "boolean")
  );
};

const isPublished = (post: PostFrontmatter) =>
  process.env.NODE_ENV !== "production" || !post.draft;

const getSlugs = async () => {
  const files = await fs.readdir(postsDirectory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
};

const getReadingMinutes = async (slug: string) => {
  const source = await fs.readFile(
    path.join(postsDirectory, `${slug}.mdx`),
    "utf8",
  );
  const words = source.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / wordsPerMinute));
};

export const getPost = async (slug: string) => {
  const postModule = (await import(
    `@/content/posts/${slug}.mdx`
  )) as PostModule;

  if (!isPostFrontmatter(postModule.frontmatter)) {
    throw new Error(
      `Invalid frontmatter in src/content/posts/${slug}.mdx. Expected title, description, and a valid date.`,
    );
  }

  const post: Post = {
    ...postModule.frontmatter,
    slug,
    readingMinutes: await getReadingMinutes(slug),
  };

  return { post, Content: postModule.default };
};

export const getPosts = async () => {
  const slugs = await getSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => (await getPost(slug)).post),
  );

  return posts
    .filter(isPublished)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
};

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
