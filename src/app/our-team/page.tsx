import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { OurTeamContent } from "@/components/site/our-team-content";

export const metadata: Metadata = {
  title: "Our Team | Davaam Life",
  description:
    "Meet the 15+ environmentalists and engineers behind Davaam Life — changing the way Pakistan supplies and consumes products by encouraging everyone to Reduce, Reuse & Refill.",
  alternates: { canonical: "https://davaam.life/our-team" },
  openGraph: {
    title: "Our Team | Davaam Life",
    description:
      "Meet the 15+ environmentalists and engineers behind Davaam Life — changing the way Pakistan supplies and consumes products.",
    type: "website",
  },
};

export default function OurTeamPage() {
  return (
    <PageShell
      eyebrow="Our Team"
      title={<>Environmentalists and engineers on a shared mission</>}
      subtitle="A dedicated team of 15+ people changing the way Pakistan supplies and consumes products — by encouraging everyone to Reduce, Reuse & Refill."
    >
      <OurTeamContent />
    </PageShell>
  );
}
