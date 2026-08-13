import type { Metadata } from "next";
import { FigmaAsset } from "@/components/foundations/figma-asset";
import { FoundationTable } from "@/components/foundations/foundation-table";
import {
  OnThisPage,
  type OnThisPageItem,
} from "@/components/foundations/on-this-page";
import { DocsShell } from "@/components/layout/docs-shell";

export const metadata: Metadata = {
  title: "Gradient",
};

const onThisPageItems: readonly OnThisPageItem[] = [
  { label: "Gradient signature texture", href: "#gradient-signature-texture" },
  { label: "Asset Specs", href: "#asset-specs" },
  { label: "Usage", href: "#usage" },
  {
    label: "Dominant Palette (for reference/matching)",
    href: "#dominant-palette",
  },
  { label: "Source of truth", href: "#source-of-truth" },
];

const palette = [
  ["Light peach", "#F5A96B", "Highlight areas"],
  ["Mid orange", "#DF520C", "Core transition zone"],
  ["Deep brown", "#4A2818", "Shadow / edge areas"],
  ["Mauve tint", "#C97A6D", "Subtle diagonal streak, top-left"],
] as const;

export default function GradientPage() {
  return (
    <DocsShell
      pageTitle="Gradient"
      activePath="/foundations/gradient"
      breadcrumb={{ parent: "Fondations", current: "Gradient" }}
      detailRail={<OnThisPage items={onThisPageItems} />}
      smoothAnchorScroll
    >
      <header className="flex h-[68px] w-full flex-col gap-1 px-3">
        <h1 className="text-base leading-6 font-medium text-text-primary">
          Gradient
        </h1>
        <p className="text-sm leading-5 font-normal text-text-secondary">
          Our logo represents the intersection of innovation, humanity, and
          professionalism, serving as a visual expression of who we are and the
          future we are building together
        </p>
      </header>

      <div aria-hidden="true" className="relative h-0 w-full">
        <div className="absolute top-[-0.5px] left-0 h-px w-full bg-border-subtle" />
      </div>

      <section
        id="gradient-signature-texture"
        className="flex h-[381px] w-full flex-col gap-2.5"
      >
        <div className="flex h-[84px] flex-col gap-1 px-3">
          <h2 className="text-sm leading-5 font-medium text-text-primary">
            Gradient signature texture
          </h2>
          <p className="text-sm leading-5 font-normal text-text-secondary">
            Our gradient is a mesh-based, organic texture rather than a simple
            linear blend, capturing soft light, warmth, and depth with a fine
            grain finish. Because of its complexity, it&apos;s used as a static
            image asset rather than a generated CSS gradient.
          </p>
        </div>
        <div className="grid h-[287px] w-full grid-cols-[287px_287px] gap-2.5">
          <FigmaAsset
            src="/assets/foundations/gradient/texture-1.png"
            alt="Tally orange mesh gradient texture with grain"
            width={287}
            height={287}
          />
          <FigmaAsset
            src="/assets/foundations/gradient/texture-2.png"
            alt="Tally orange and deep-brown mesh gradient texture with grain"
            width={287}
            height={287}
          />
        </div>
      </section>

      <section id="asset-specs" className="flex h-[200px] w-full flex-col gap-2.5">
        <h2 className="h-5 px-3 text-sm leading-5 font-medium text-text-primary">
          Asset Specs
        </h2>
        <FoundationTable
          columns={[
            { label: "Property", width: 292 },
            { label: "Value", width: 292 },
          ]}
          rows={[
            ["Format", "PNG / WebP (exported, not code-generated)"],
            ["Type", "Mesh gradient with grain overlay"],
            ["Aspect ratio", "1:1 (square master), croppable"],
            ["Min export size", "1920×1920px"],
          ]}
        />
      </section>

      <section id="usage" className="flex h-[200px] w-full flex-col gap-2.5">
        <h2 className="h-5 px-3 text-sm leading-5 font-medium text-text-primary">
          Usage
        </h2>
        <FoundationTable
          columns={[{ label: "Use for", width: 584 }]}
          rows={[
            ["Website hero/feature section backgrounds behind UI screenshots"],
            ["Marketing CTA banners and promotional cards"],
            ["Out-of-home advertising (billboards, posters) as a brand-color panel"],
            ["Product screenshot/device mockup backdrops in marketing decks or app store assets"],
          ]}
        />
      </section>

      <section id="dominant-palette" className="flex h-[250px] w-full flex-col gap-2.5">
        <h2 className="h-5 px-3 text-sm leading-5 font-medium text-text-primary">
          Dominant Palette (for reference/matching)
        </h2>
        <FoundationTable
          columns={[
            { label: "Swatch", width: 146 },
            { label: "Hex", width: 146 },
            { label: "Notes", width: 292 },
          ]}
          rows={palette.map(([name, value, note]) => [
            name,
            {
              content: (
                <span className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="size-3.5 rounded-[2px]"
                    style={{ backgroundColor: value }}
                  />
                  <span className="font-mono">{value}</span>
                </span>
              ),
            },
            note,
          ])}
        />
        <p className="h-10 px-3 text-sm leading-5 font-normal text-text-secondary">
          <span className="font-medium text-text-primary">Note:</span> these are
          reference colors only, the asset itself should always be used as the
          image file, not reconstructed from these hex values.
        </p>
      </section>

      <section id="source-of-truth" className="flex h-[84px] w-full flex-col gap-1 px-3">
        <h2 className="text-sm leading-5 font-medium text-text-primary">
          Source of truth
        </h2>
        <p className="text-sm leading-5 font-normal text-text-secondary">
          This texture is sourced from the master gradient asset file (not a
          live Figma gradient style) at node 369:4. Always reference the exported
          image asset directly rather than reproducing it via code.
        </p>
      </section>
    </DocsShell>
  );
}
