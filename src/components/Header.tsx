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
      <nav className="flex items-center gap-4 text-sm sm:gap-5">
        <Link href="/blog" className={navLinkClass}>
          Blog
        </Link>
        <Link href="/random" className={navLinkClass}>
          Random
        </Link>
        <a href="/resume.pdf" className={navLinkClass}>
          Resume
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
};
