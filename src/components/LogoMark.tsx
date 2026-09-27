import type { Logo } from "@/data/site";

interface LogoMarkProps {
  logo: Logo;
  className?: string;
}

export const LogoMark = ({ logo, className = "" }: LogoMarkProps) => {
  return (
    // Logos are tiny static PNGs, so a plain <img> avoids shipping next/image's
    // client code to the home page and skips the image optimizer entirely.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo.src}
      alt=""
      width={20}
      height={20}
      decoding="async"
      className={`size-5 shrink-0 rounded-sm opacity-80 grayscale
        dark:opacity-60 ${logo.invertInDark ? "dark:invert" : ""} ${className}`}
    />
  );
};
