import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import * as React from "react";

type HeadingProps = React.ComponentPropsWithoutRef<"h2">;

const headingClass = "group text-foreground relative scroll-mt-8";

const HeadingAnchor = ({ id }: { id?: string }) => {
  if (!id) return null;

  return (
    <a
      href={`#${id}`}
      aria-label="Link to this section"
      className="text-subtle hover:text-accent absolute top-0 -left-5
        font-normal no-underline opacity-0 transition-opacity
        group-hover:opacity-100 focus-visible:opacity-100"
    >
      §
    </a>
  );
};

const components: MDXComponents = {
  h1: ({ id, children, ...props }: HeadingProps) => (
    <h1
      id={id}
      className={`${headingClass} mt-12 mb-4 text-xl font-medium tracking-tight`}
      {...props}
    >
      <HeadingAnchor id={id} />
      {children}
    </h1>
  ),
  h2: ({ id, children, ...props }: HeadingProps) => (
    <h2
      id={id}
      className={`${headingClass} mt-12 mb-4 text-lg font-medium tracking-tight`}
      {...props}
    >
      <HeadingAnchor id={id} />
      {children}
    </h2>
  ),
  h3: ({ id, children, ...props }: HeadingProps) => (
    <h3 id={id} className={`${headingClass} mt-8 mb-3 font-medium`} {...props}>
      <HeadingAnchor id={id} />
      {children}
    </h3>
  ),
  p: (props) => <p className="text-muted my-5 leading-7" {...props} />,
  a: ({ href = "", ...props }) => {
    const className =
      "text-foreground underline decoration-border hover:decoration-accent hover:decoration-wavy";

    if (href.startsWith("/") || href.startsWith("#")) {
      return <Link href={href} className={className} {...props} />;
    }

    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    );
  },
  ul: (props) => (
    <ul
      className="text-muted marker:text-subtle my-5 list-disc space-y-2 pl-5
        leading-7"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="text-muted marker:text-subtle my-5 list-decimal space-y-2 pl-5
        leading-7"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-border text-muted my-6 border-l-2 pl-4 italic"
      {...props}
    />
  ),
  hr: (props) => <hr className="border-border my-10" {...props} />,
  strong: (props) => (
    <strong className="text-foreground font-medium" {...props} />
  ),
  pre: (props) => (
    <pre
      className="border-border bg-surface my-6 overflow-x-auto rounded-lg border
        py-4 font-mono text-[13px] leading-6"
      {...props}
    />
  ),
  table: (props) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full text-left text-sm" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="border-border text-foreground border-b py-2 pr-4 font-medium"
      {...props}
    />
  ),
  td: (props) => (
    <td className="border-border text-muted border-b py-2 pr-4" {...props} />
  ),
  img: ({ alt = "", ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt}
      className="border-border my-6 rounded-lg border"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
