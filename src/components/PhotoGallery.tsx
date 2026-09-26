"use client";

import Image from "next/image";
import * as React from "react";

import type { Photo } from "@/lib/photos";

interface PhotoGalleryProps {
  photos: Photo[];
}

const swipeThreshold = 50;
const thumbnailSizes = "(min-width: 640px) 330px, 100vw";

// Waits for the page to go idle, then flips on full-size loading. Skipped when
// the visitor has asked to save data; opening the viewer loads them anyway.
const useIdleFlag = () => {
  const [isIdle, setIsIdle] = React.useState(false);

  React.useEffect(() => {
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    if (connection?.saveData) return;

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(() => setIsIdle(true), {
        timeout: 3000,
      });
      return () => window.cancelIdleCallback(id);
    }

    const id = setTimeout(() => setIsIdle(true), 1500);
    return () => clearTimeout(id);
  }, []);

  return isIdle;
};

const controlClass =
  "text-muted hover:text-foreground focus-visible:text-foreground rounded-md p-2 transition-colors";

const ChevronIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="size-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={direction === "left" ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"} />
  </svg>
);

export const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const touchStartX = React.useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [hasOpened, setHasOpened] = React.useState(false);
  const isIdle = useIdleFlag();
  const shouldLoadFullSize = isIdle || hasOpened;

  if (photos.length === 0) {
    return <p className="text-muted">No photos yet.</p>;
  }

  const activePhoto = activeIndex === null ? undefined : photos[activeIndex];
  const pad = (value: number) =>
    String(value).padStart(String(photos.length).length, "0");

  const open = (index: number) => {
    setActiveIndex(index);
    setHasOpened(true);
    dialogRef.current?.showModal();
  };

  const close = () => dialogRef.current?.close();

  const step = (delta: number) => {
    setActiveIndex((index) =>
      index === null ? index : (index + delta + photos.length) % photos.length,
    );
  };

  const handleThumbnailClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    // Let cmd/ctrl/shift-click keep their usual "open in new tab" behavior.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    open(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "ArrowLeft") step(-1);
    if (event.key === "ArrowRight") step(1);
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX;
    touchStartX.current = null;
    if (startX === null || endX === undefined) return;

    const deltaX = endX - startX;
    if (Math.abs(deltaX) > swipeThreshold) step(deltaX > 0 ? -1 : 1);
  };

  return (
    <>
      <ul className="columns-1 gap-3 sm:columns-2">
        {photos.map((photo, index) => (
          <li key={photo.src} className="mb-3 break-inside-avoid">
            <a
              href={photo.src}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => handleThumbnailClick(event, index)}
              className="block cursor-zoom-in"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                placeholder="blur"
                blurDataURL={photo.blurDataURL}
                sizes={thumbnailSizes}
                preload={index < 2}
                className="border-border w-full rounded-lg border opacity-90
                  transition-opacity hover:opacity-100"
              />
            </a>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label="Photo viewer"
        onClose={() => setActiveIndex(null)}
        onKeyDown={handleKeyDown}
        className="bg-background/95 m-0 h-dvh max-h-none w-dvw max-w-none
          flex-col border-0 p-0 backdrop-blur-sm open:flex
          backdrop:bg-transparent"
      >
        <div className="flex items-center justify-end p-3">
          <button
            type="button"
            onClick={close}
            aria-label="Close photo viewer"
            className={controlClass}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div
          className="flex min-h-0 flex-1 items-center gap-2 px-2 sm:px-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous photo"
            className={`${controlClass} hidden sm:block`}
          >
            <ChevronIcon direction="left" />
          </button>

          <div
            className="relative h-full flex-1"
            onClick={(event) => {
              if (event.target === event.currentTarget) close();
            }}
          >
            {/* Every photo stays mounted so switching is a crossfade between
                already-decoded images. Each full-size image sits on top of its
                (already cached) thumbnail, so nothing is ever blank. */}
            {photos.map((photo, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={photo.src}
                  aria-hidden={!isActive}
                  className={`pointer-events-none absolute inset-0
                  transition-opacity duration-200 select-none
                  motion-reduce:transition-none
                  ${isActive ? "opacity-100" : "opacity-0"}`}
                >
                  {isActive && (
                    <Image
                      src={photo.src}
                      alt=""
                      fill
                      sizes={thumbnailSizes}
                      className="object-contain"
                    />
                  )}
                  {shouldLoadFullSize && (
                    <Image
                      src={photo.src}
                      alt={isActive ? photo.alt : ""}
                      fill
                      sizes="100vw"
                      loading="eager"
                      fetchPriority={isActive ? "high" : "low"}
                      className="object-contain"
                    />
                  )}
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next photo"
            className={`${controlClass} hidden sm:block`}
          >
            <ChevronIcon direction="right" />
          </button>
        </div>

        {activePhoto && activeIndex !== null && (
          <p
            aria-live="polite"
            className="text-subtle px-6 py-4 text-center font-mono text-xs"
          >
            {pad(activeIndex + 1)} / {pad(photos.length)} · {activePhoto.alt}
          </p>
        )}
      </dialog>
    </>
  );
};
