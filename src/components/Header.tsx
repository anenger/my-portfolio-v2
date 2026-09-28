import { site } from "@/data/site";
import { NavLink } from "./NavLink";
import { ThemeToggle } from "./ThemeToggle";

const navLinkClass = "transition-colors";
const inactiveClass = "text-muted hover:text-foreground";

// The current page keeps the site-wide wavy accent underline that other links
// only show on hover.
const activeClass =
  "text-foreground underline decoration-accent decoration-wavy";

const navItems = [
  { href: "/blog", label: "Blog" },
  { href: "/photos", label: "Photos" },
  { href: "/bookmarks", label: "Bookmarks" },
];

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-8">
      <NavLink
        href="/"
        className="text-foreground font-medium tracking-tight"
        activeClassName={activeClass}
      >
        {site.name}
      </NavLink>
      <nav className="flex items-center gap-3 text-sm sm:gap-5">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            className={navLinkClass}
            inactiveClassName={inactiveClass}
            activeClassName={activeClass}
          >
            {item.label}
          </NavLink>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
};
