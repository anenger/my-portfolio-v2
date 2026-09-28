"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

interface NavLinkProps {
  href: string;
  className?: string;
  inactiveClassName?: string;
  activeClassName?: string;
}

const isActivePath = (pathname: string, href: string) =>
  href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);

export const NavLink = ({
  href,
  className = "",
  inactiveClassName = "",
  activeClassName = "",
  children,
}: React.PropsWithChildren<NavLinkProps>) => {
  const pathname = usePathname();
  const isActive = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`${className}
        ${isActive ? activeClassName : inactiveClassName}`}
    >
      {children}
    </Link>
  );
};
