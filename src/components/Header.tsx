import Link from "next/link";

import { site } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

const navLinkClass = "text-muted hover:text-foreground transition-colors";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-8">
      <Link href="/" className="text-foreground font-medium tracking-tight">
        {site.name}
      </Link>
      <nav className="flex items-center gap-3 text-sm sm:gap-5">
        <Link href="/blog" className={navLinkClass}>
          Blog
        </Link>
        <Link href="/photos" className={navLinkClass}>
          Photos
        </Link>
        <Link href="/bookmarks" className={navLinkClass}>
          Bookmarks
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
};
