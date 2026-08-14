import { DocsShell } from "@/components/layout/docs-shell";
import { FoundationCard } from "@/components/home/foundation-card";

const foundations = [
  {
    title: "Color",
    description: "Explore the color styles and usage guidance.",
    href: "/foundations/color",
    icon: "/assets/icons/foundations/color.svg",
  },
  {
    title: "Typography",
    description: "Explore the typography styles and usage guidelines.",
    href: "/foundations/typography",
    icon: "/assets/icons/foundations/typography.svg",
  },
  {
    title: "Spacing",
    description: "Explore the spacing styles and usage guidance.",
    href: "/foundations/spacing",
    icon: "/assets/icons/foundations/spacing.svg",
  },
  {
    title: "Elevation",
    description: "Explore the elevation styles and usage guidance.",
    href: "/foundations/elevation",
    icon: "/assets/icons/foundations/elevation.svg",
  },
  {
    title: "Radius",
    description: "Explore the radius styles and usage guidance.",
    href: "/foundations/radius",
    icon: "/assets/icons/foundations/radius.svg",
  },
  {
    title: "Logo",
    description: "Explore the logo styles and usage guidance.",
    href: "/foundations/logo",
    icon: "/assets/icons/foundations/logo.svg",
  },
  {
    title: "Gradient",
    description: "Explore the gradient styles and usage guidance.",
    href: "/foundations/gradient",
    icon: "/assets/icons/foundations/gradient.svg",
  },
  {
    title: "Imagery",
    description: "Explore the imagery styles and usage guidance.",
    href: "/foundations/imagery",
    icon: "/assets/icons/foundations/imagery.svg",
  },
] as const;

export default function Home() {
  return (
    <DocsShell>
      <header className="flex h-12 w-full flex-col gap-1 px-3">
        <h1 className="text-base leading-6 font-medium tracking-[0] text-text-primary">
          Tally UI Design System
        </h1>
        <p className="text-sm leading-5 font-normal tracking-[0] text-text-secondary">
          Start with the core design decisions that shape every Tally interface.
        </p>
      </header>

      <div aria-hidden="true" className="relative h-0 w-full">
        <div className="absolute top-[-0.5px] left-3 h-px w-[656px] bg-border-subtle" />
      </div>

      <section aria-labelledby="foundations-heading" className="flex w-full flex-col gap-2.5">
        <div className="h-5 px-3">
          <h2
            id="foundations-heading"
            className="text-sm leading-5 font-medium tracking-[0] text-text-primary"
          >
            Foundations
          </h2>
        </div>

        <div className="grid w-full grid-cols-[repeat(3,220px)] gap-2.5">
          {foundations.map((foundation) => (
            <FoundationCard key={foundation.href} {...foundation} />
          ))}
        </div>
      </section>
    </DocsShell>
  );
}
