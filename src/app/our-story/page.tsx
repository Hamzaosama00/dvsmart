import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { OurStoryContent } from "@/components/site/our-story-content";

export const metadata: Metadata = {
  title: "Our Story | Davaam Life",
  description:
    "Founded in 2017, Davaam Life started with a mission to advance sustainability in Pakistan. From years of R&D to award-winning refill-first infrastructure — read the full story.",
  alternates: { canonical: "https://davaam.life/our-story" },
  openGraph: {
    title: "Our Story | Davaam Life",
    description:
      "Founded in 2017, Davaam Life started with a mission to advance sustainability in Pakistan. Read the full story.",
    type: "article",
  },
};

export default function OurStoryPage() {
  return (
    <PageShell
      eyebrow="Our Story"
      title={<>Built since 2017 to advance sustainability in Pakistan</>}
      subtitle="What started as two co-founders on a sustainability mission has grown into an award-winning team of environmentalists and engineers building refill-first infrastructure across the country."
    >
      <OurStoryContent />
    </PageShell>
  );
}
