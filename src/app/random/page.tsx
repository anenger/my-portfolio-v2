import type { Metadata } from "next";

import { PhotoGallery } from "@/components/PhotoGallery";
import { Section } from "@/components/Section";
import { getPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Random",
  description: "Odds and ends from Andrew Enger, mostly photos.",
};

export default async function RandomPage() {
  const photos = await getPhotos();

  return (
    <section className="pt-8">
      <h1 className="text-foreground text-2xl font-medium tracking-tight">
        Random
      </h1>
      <p className="text-muted mt-3">Odds and ends. Mostly photos, for now.</p>
      <Section title="Photos">
        <p className="text-muted mb-8 text-sm leading-relaxed">
          Film photos were taken with a Contax T3 on various 35mm film stocks.
          For prints or custom photography inquiries, reach out to{" "}
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
      </Section>
    </section>
  );
}
