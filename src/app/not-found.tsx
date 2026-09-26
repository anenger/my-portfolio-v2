import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-8">
      <h1 className="text-foreground text-2xl font-medium tracking-tight">
        Page not found
      </h1>
      <p className="text-muted mt-4">
        Sorry, I couldn&apos;t find what you were looking for.{" "}
        <Link
          href="/"
          className="text-foreground decoration-border hover:decoration-accent
            underline hover:decoration-wavy"
        >
          Go home
        </Link>
        .
      </p>
    </section>
  );
}
