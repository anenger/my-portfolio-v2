import * as React from "react";

interface SectionProps {
  title: string;
  className?: string;
}

export const Section = ({
  title,
  className = "",
  children,
}: React.PropsWithChildren<SectionProps>) => {
  return (
    <section className={`mt-16 ${className}`}>
      <h2
        className="text-subtle mb-6 text-xs font-medium tracking-widest
          uppercase"
      >
        {title}
      </h2>
      {children}
    </section>
  );
};
