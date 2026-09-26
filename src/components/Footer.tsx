import { site, socialLinks } from "@/data/site";

export const Footer = () => {
  return (
    <footer
      className="border-border text-subtle mt-24 flex flex-col gap-3 border-t
        py-8 text-sm sm:flex-row sm:items-center sm:justify-between"
    >
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <ul className="flex gap-4">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="/rss.xml"
            className="hover:text-foreground transition-colors"
          >
            RSS
          </a>
        </li>
      </ul>
    </footer>
  );
};
