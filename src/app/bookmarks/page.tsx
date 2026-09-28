import type { Metadata } from "next";

import { Section } from "@/components/Section";
import { bookmarkGroups } from "@/data/bookmarks";

export const metadata: Metadata = {
  title: "Bookmarks",
  description: "Links and other things on the internet Andrew Enger likes.",
};

const displayUrl = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

export default function BookmarksPage() {
  const groups = bookmarkGroups.filter((group) => group.bookmarks.length > 0);

  return (
    <section className="pt-8">
      <h1 className="text-foreground text-2xl font-medium tracking-tight">
        Bookmarks
      </h1>
      <p className="text-muted mt-3">
        Links and other things on the internet I like.
      </p>

      {groups.length === 0 ? (
        <p className="text-muted mt-12">Nothing here yet. Check back soon.</p>
      ) : (
        groups.map((group) => (
          <Section key={group.title} title={group.title}>
            <ul className="flex flex-col gap-3">
              {group.bookmarks.map((bookmark) => (
                <li
                  key={bookmark.url}
                  className="flex items-baseline justify-between gap-4"
                >
                  <a
                    href={bookmark.url}
                    className="text-foreground hover:text-accent
                      transition-colors"
                  >
                    {bookmark.title}
                  </a>
                  <span className="text-subtle shrink-0 font-mono text-xs">
                    {displayUrl(bookmark.url)}
                  </span>
                </li>
              ))}
            </ul>
          </Section>
        ))
      )}
    </section>
  );
}
