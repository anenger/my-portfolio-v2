import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    // Photos are never replaced in place (new photo = new filename), so cache
    // optimized variants for 31 days instead of re-generating every 4 hours.
    minimumCacheTTL: 2678400,
  },
};

// Plugins are referenced by name so the config stays serializable for Turbopack.
const withMDX = createMDX({
  options: {
    remarkPlugins: [
      "remark-gfm",
      "remark-frontmatter",
      "remark-mdx-frontmatter",
    ],
    rehypePlugins: [
      "rehype-slug",
      [
        "rehype-pretty-code",
        {
          theme: { dark: "github-dark-dimmed", light: "github-light" },
          keepBackground: false,
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
