import type { Metadata } from "next";

import { PhotoGallery } from "@/components/PhotoGallery";
import { getPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Photos",
  description: "Film photos by Andrew Enger, shot on a Contax T3.",
};

export default async function PhotosPage() {
  const photos = await getPhotos();

  return (
    <section className="pt-8">
      <h1 className="text-foreground text-2xl font-medium tracking-tight">
        Photos
      </h1>
      <p className="text-muted mt-3 mb-12 leading-relaxed">
        Film photos were taken with a Contax T3 on various 35mm film stocks. For
        prints or custom photography inquiries, reach out to{" "}
        <a
          href="mailto:photos@anenger.com"
          className="text-foreground decoration-border hover:decoration-accent
            underline hover:decoration-wavy"
        >
          photos@anenger.com
        </a>
        .
      </p>
      <PhotoGallery photos={photos} />
    </section>
  );
}
