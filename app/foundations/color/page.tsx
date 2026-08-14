import type { Metadata } from "next";
import { InlineCode } from "@/components/docs/inline-code";
import {
  ColorRamp,
  type ColorSwatchValue,
} from "@/components/foundations/color/color-ramp";
import { OnThisPage } from "@/components/foundations/color/on-this-page";
import { DocsShell } from "@/components/layout/docs-shell";
import foundationData from "@/src/data/tally-foundation.json";

export const metadata: Metadata = {
  title: "Color",
};

type PaletteName = keyof typeof foundationData.palettes;

function getPalette(name: PaletteName): ColorSwatchValue[] {
  return Object.entries(foundationData.palettes[name]).map(([step, value]) => ({
    name: `${name}-${step}`,
    value,
  }));
}

const semanticColors = [
  { name: "text-brand", value: "#DF520C" },
  { name: "text-primary", value: "#000000" },
  { name: "text-secondary", value: "#666666" },
  { name: "text-tertiary", value: "#8F8F8F" },
  { name: "bg-accent", value: "#DF520C" },
  { name: "bg-primary", value: "#FFFFFF" },
  { name: "bg-secondary", value: "#F5F5F5" },
  { name: "bg-subtle", value: "#FAFAFA" },
  {
    name: "border-subtle",
    value: "rgba(0,0,0,0.05)",
  },
  {
    name: "border-default",
    value: "rgba(0,0,0,0.10)",
  },
  { name: "border-focus", value: "#DF520C" },
  { name: "border-contrast", value: "#000000" },
] as const;

export default function ColorPage() {
  return (
    <DocsShell
      pageTitle="Color"
      activePath="/foundations/color"
      breadcrumb={{ parent: "Fondations", current: "Color" }}
      detailRail={<OnThisPage />}
      smoothAnchorScroll
    >
      <header className="flex h-12 w-full flex-col gap-1 px-3">
        <h1 className="text-base leading-6 font-medium tracking-[0] text-text-primary">
          Color
        </h1>
        <p className="text-sm leading-5 font-normal tracking-[0] text-text-secondary">
          Color tokens collected from{" "}
          <span className="text-text-primary">tally-ui-source</span> plus the
          cool-gray ramp on 2026-08-12.
        </p>
      </header>

      <div aria-hidden="true" className="relative h-0 w-full">
        <div className="absolute top-[-0.5px] left-0 h-px w-full bg-border-subtle" />
      </div>

      <section
        aria-labelledby="provenance-heading"
        className="relative flex h-[108px] w-full flex-col gap-1 overflow-hidden rounded-card bg-background-subtle p-3 shadow-card"
      >
        <h2
          id="provenance-heading"
          className="h-5 shrink-0 text-sm leading-5 font-medium tracking-[0] text-text-primary"
        >
          Provenance
        </h2>
        <p className="text-sm leading-5 font-normal tracking-[0] text-text-secondary">
          These tokens were collected from{" "}
          <span className="text-text-primary">tally-ui-source</span> on
          2026-08-12 and are this repo&apos;s token source. Values are rendered
          straight from <InlineCode>src/data/tally-foundation.json</InlineCode>
          {" via inline styles."}
        </p>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] border-[0.5px] border-border-default"
        />
      </section>

      <section
        id="palette-ramps"
        aria-labelledby="palette-ramps-heading"
        className="flex h-[104px] w-full flex-col gap-1 px-3"
      >
        <h2
          id="palette-ramps-heading"
          className="h-5 shrink-0 text-sm leading-5 font-medium tracking-[0] text-text-primary"
        >
          Palette ramps
        </h2>
        <p className="text-sm leading-5 font-normal tracking-[0] text-text-secondary">
          Six ramps extracted value-for-value from the running apps.{" "}
          <InlineCode>neutral</InlineCode> is the warm brand ramp
          (cream/charcoal), <InlineCode>orange-vivid</InlineCode> is the
          brand/action ramp ({" "}
          <span className="text-text-primary">
            600 #DF520C = primary buttons
          </span>
          ). The cool gray ramp comes from Figma Primitives (18 shades incl. the
          75/150/250/350/975 half-steps) only the 3001 app had it tokenized.
        </p>
      </section>

      <ColorRamp
        id="neutral"
        title="Neutral (warm)"
        colors={getPalette("neutral")}
      />
      <ColorRamp
        id="orange-vivid"
        title="Orange-vivid (brand)"
        colors={getPalette("orange-vivid")}
      />
      <ColorRamp
        id="green"
        title="Green (success)"
        colors={getPalette("green")}
      />
      <ColorRamp
        id="amber"
        title="Amber (warning)"
        colors={getPalette("amber")}
      />
      <ColorRamp id="red" title="Red (error)" colors={getPalette("red")} />
      <ColorRamp id="gray" title="Gray (cool)" colors={getPalette("gray")} />
      <ColorRamp
        id="semantic-colors"
        title="Semantic colors"
        colors={semanticColors}
      />

      <section
        id="source-of-truth"
        aria-labelledby="source-of-truth-heading"
        className="flex h-16 w-full flex-col gap-1 px-3"
      >
        <h2
          id="source-of-truth-heading"
          className="h-5 shrink-0 text-sm leading-5 font-medium tracking-[0] text-text-primary"
        >
          Source of truth
        </h2>
        <p className="text-sm leading-5 font-normal tracking-[0] text-text-secondary">
          These are the source-of-truth Tally UI Design System Color tokens.
          Primitive ramps and semantic tokens render directly from{" "}
          <InlineCode>src/data/tally-foundation.json</InlineCode>.
        </p>
      </section>
    </DocsShell>
  );
}
