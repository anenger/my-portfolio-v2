import Link from "next/link";

import { LogoMark } from "@/components/LogoMark";
import { PostList } from "@/components/PostList";
import { Section } from "@/components/Section";
import { Typewriter } from "@/components/Typewriter";
import { education, experience, projects, socialLinks } from "@/data/site";
import { getPosts } from "@/lib/posts";

const recentPostCount = 3;

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <section className="pt-8">
        <h1 className="text-foreground text-2xl font-medium tracking-tight">
          <Typewriter text="Hey, I'm Andrew." />
        </h1>
        <div className="text-muted mt-6 flex flex-col gap-4 leading-relaxed">
          <p>
            I&apos;m a full-stack software engineer in New York, currently at{" "}
            <a
              href="https://www.clearme.com/"
              className="text-foreground decoration-border
                hover:decoration-accent underline transition-colors
                hover:decoration-wavy"
            >
              CLEAR
            </a>
            . Before that I spent a few years at Microsoft working on Loop.
          </p>
          <p>
            I care about frontend performance, automated testing, and developer
            productivity. When I&apos;m not coding, I&apos;m probably playing
            Counter-Strike, reading, cooking, or on a tennis court.
          </p>
        </div>
        <ul className="mt-6 flex flex-wrap gap-y-2 text-sm">
          {socialLinks.map((link, index) => (
            <li key={link.label}>
              {index > 0 && (
                <span aria-hidden="true" className="text-subtle mx-2.5">
                  ·
                </span>
              )}
              <a
                href={link.href}
                className="text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <Section title="Writing">
        <PostList posts={posts.slice(0, recentPostCount)} />
        {posts.length > recentPostCount && (
          <Link
            href="/blog"
            className="text-muted hover:text-foreground mt-6 inline-block
              text-sm transition-colors"
          >
            All posts →
          </Link>
        )}
      </Section>

      <Section title="Experience">
        <ol className="flex flex-col gap-5">
          {experience.map((role) => (
            <li
              key={`${role.company}-${role.title}`}
              className="flex items-start gap-3"
            >
              <LogoMark logo={role.logo} className="mt-0.5" />
              <div
                className="flex flex-1 flex-col gap-1 sm:flex-row
                  sm:items-baseline sm:justify-between"
              >
                <h3 className="text-foreground font-medium">
                  {role.url ? (
                    <a
                      href={role.url}
                      className="hover:text-accent transition-colors"
                    >
                      {role.company}
                    </a>
                  ) : (
                    role.company
                  )}
                  <span className="text-muted font-normal">
                    {" "}
                    · {role.title}
                  </span>
                </h3>
                <span className="text-subtle shrink-0 font-mono text-xs">
                  {role.range}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Education">
        <ul className="flex flex-col gap-6">
          {education.map((school) => (
            <li key={school.name} className="flex items-start gap-3">
              <LogoMark logo={school.logo} className="mt-0.5" />
              <div className="flex-1">
                <div
                  className="flex flex-col gap-1 sm:flex-row sm:items-baseline
                    sm:justify-between"
                >
                  <h3 className="text-foreground font-medium">
                    {school.url ? (
                      <a
                        href={school.url}
                        className="hover:text-accent transition-colors"
                      >
                        {school.name}
                      </a>
                    ) : (
                      school.name
                    )}
                    <span className="text-muted font-normal">
                      {" "}
                      · {school.degree}
                    </span>
                  </h3>
                  <span className="text-subtle shrink-0 font-mono text-xs">
                    {school.range}
                  </span>
                </div>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  {school.details}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Projects">
        <ul className="flex flex-col gap-6">
          {projects.map((project) => (
            <li key={project.name}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-foreground font-medium">
                  {project.url ? (
                    <a
                      href={project.url}
                      className="hover:text-accent transition-colors"
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                  <span className="text-muted font-normal">
                    {" "}
                    · {project.role}
                  </span>
                </h3>
                <span className="text-subtle shrink-0 font-mono text-xs">
                  {project.range}
                </span>
              </div>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                {project.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
