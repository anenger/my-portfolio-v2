"use client";

import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "1x1" | "1x2" | "2x1" | "2x2";
  title?: string;
  subtitle?: string;
  body?: string;
}

interface CardHeaderProps {
  className?: string;
}

export const CardHeader = ({
  children,
  className = "",
}: React.PropsWithChildren<CardHeaderProps>) => {
  return (
    <h2 className={`text-lg font-bold md:text-xl ${className}`}>{children}</h2>
  );
};

interface CardSubtitleProps {
  className?: string;
}

export const CardSubtitle = ({
  children,
  className = "",
}: React.PropsWithChildren<CardSubtitleProps>) => {
  return (
    <p className={`text-[10px] opacity-80 md:text-xs ${className}`}>
      {children}
    </p>
  );
};

interface CardBodyProps {
  className?: string;
}

export const CardBody = ({
  children,
  className = "",
}: React.PropsWithChildren<CardBodyProps>) => {
  return (
    <p className={`text-xs opacity-60 md:text-sm ${className}`}>{children}</p>
  );
};

const sizeClasses: Record<string, string> = {
  "1x1": "col-span-1 row-span-1 aspect-square",
  "1x2": "col-span-1 row-span-2",
  "2x1": "col-span-2 row-span-1",
  "2x2": "col-span-2 row-span-2 aspect-square",
};

export const Card = ({
  size = "1x1",
  className = "",
  title,
  subtitle,
  body,
  children,
  ...props
}: React.PropsWithChildren<CardProps>) => {
  const sizeClass = sizeClasses[size];

  return (
    <div
      className={`border-border/10 bg-card hover:border-border/20 rounded-xl
        border p-3 backdrop-blur-sm transition-all duration-300
        hover:scale-[1.02] hover:shadow-xl md:p-4 ${sizeClass} ${className}`}
      {...props}
    >
      {title && <CardHeader>{title}</CardHeader>}
      {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
      {body && <CardBody>{body}</CardBody>}
      {children}
    </div>
  );
};
