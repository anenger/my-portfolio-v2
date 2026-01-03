"use client";

import React from "react";

type MasonryLayoutProps = {
  columns?: 2 | 3 | 4 | 5 | 6;
  gap?: "small" | "medium";
  className?: string;
};

const gapClasses: Record<string, string> = {
  small: "gap-2 md:gap-3",
  medium: "gap-3 md:gap-4",
};

const columnClasses: Record<2 | 3 | 4 | 5 | 6, string> = {
  2: "grid-cols-2 sm:grid-cols-1 md:grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-2 md:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
  5: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
  6: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
};

export const MasonryLayout = ({
  children,
  columns = 3,
  gap = "small",
  className = "",
}: React.PropsWithChildren<MasonryLayoutProps>) => {
  const gapClass = gapClasses[gap];
  const columnClass = columnClasses[columns];

  return (
    <div
      className={`grid auto-rows-fr ${columnClass} ${gapClass} ${className}`}
    >
      {children}
    </div>
  );
};
