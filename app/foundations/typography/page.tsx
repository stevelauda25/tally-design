import type { Metadata } from "next";
import { InlineCode } from "@/components/docs/inline-code";
import { FoundationTable } from "@/components/foundations/foundation-table";
import {
  OnThisPage,
  type OnThisPageItem,
} from "@/components/foundations/on-this-page";
import { ProvenanceCard } from "@/components/foundations/provenance-card";
import { DocsShell } from "@/components/layout/docs-shell";
import foundationData from "@/src/data/tally-foundation.json";

export const metadata: Metadata = {
  title: "Typography",
};

const onThisPageItems: readonly OnThisPageItem[] = [
  { label: "Font family", href: "#font-family" },
  { label: "Size scale", href: "#size-scale" },
  { label: "Weights", href: "#weights" },
  { label: "Source of truth", href: "#source-of-truth" },
];

const scaleRowHeights = [34, 36, 40, 44, 44, 48, 56, 64, 72, 80];

export default function TypographyPage() {
  return (
    <DocsShell
      pageTitle="Typography"
      activePath="/foundations/typography"
      breadcrumb={{ parent: "Fondations", current: "Typography" }}
      detailRail={<OnThisPage items={onThisPageItems} />}
      smoothAnchorScroll
    >
      <header className="flex h-12 w-full flex-col gap-1 px-3">
        <h1 className="text-base leading-6 font-medium tracking-[0] text-text-primary">
          Typography
        </h1>
        <p className="text-sm leading-5 font-normal tracking-[0] text-text-secondary">
          Typography tokens collected from{" "}
          <span className="text-text-primary">tally-ui-source</span> on
          2026-08-12.
        </p>
      </header>

      <div aria-hidden="true" className="relative h-0 w-full">
        <div className="absolute top-[-0.5px] left-0 h-px w-full bg-border-subtle" />
      </div>

      <ProvenanceCard>
        These tokens were collected from{" "}
        <span className="text-text-primary">tally-ui-source</span> on
        2026-08-12 and are this repo&apos;s token source. Values are rendered
        straight from <InlineCode>src/data/tally-foundation.json</InlineCode>
        {" via inline styles."}
      </ProvenanceCard>

      <section id="font-family" className="flex h-[254px] w-full flex-col gap-2.5">
        <div className="flex h-11 flex-col gap-1 px-3">
          <h2 className="text-sm leading-5 font-medium text-text-primary">
            Font family
          </h2>
          <p className="text-sm leading-5 font-normal text-text-secondary">
            Tally uses <span className="text-text-primary">Crimson Pro</span>
            {" and "}
            <span className="text-text-primary">Inter</span>.
          </p>
        </div>
        <div className="relative flex h-[200px] w-full flex-col overflow-hidden rounded-card bg-background-primary shadow-card">
          <div className="flex h-[100px] items-center justify-center border-b-[0.5px] border-border-default px-2.5 py-1.5">
            <p className="font-crimson text-2xl leading-8 font-medium tracking-[-0.24px] text-text-primary">
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
          <div className="flex h-[100px] items-center justify-center px-2.5 py-1.5">
            <p className="text-base leading-6 font-medium tracking-[0] text-text-primary">
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
          <span className="pointer-events-none absolute inset-0 rounded-[inherit] border-[0.5px] border-border-default" />
        </div>
      </section>

      <section id="size-scale" className="flex h-[646px] w-full flex-col gap-2.5">
        <div className="flex h-[84px] flex-col gap-1 px-3">
          <h2 className="text-sm leading-5 font-medium text-text-primary">
            Size scale
          </h2>
          <p className="text-sm leading-5 font-normal text-text-secondary">
            Ten sizes in the collected scale, from{" "}
            <InlineCode>text-xs</InlineCode> → <InlineCode>display-lg</InlineCode>.
            The scale includes five text sizes, two heading sizes, and three
            display sizes, with their corresponding line heights defined for
            each level.
          </p>
        </div>
        <FoundationTable
          columns={[
            { label: "Token", width: 107 },
            { label: "Size", width: 87 },
            { label: "Line height", width: 88 },
            { label: "Sample", width: 302 },
          ]}
          rowHeights={scaleRowHeights}
          rows={foundationData.typography.scale.map((item) => [
            { content: item.token, mono: true },
            String(item.size),
            String(item.lineHeight),
            {
              content: (
                <span
                  className={item.family === "crimson" ? "font-crimson" : ""}
                  style={{
                    fontSize: item.size,
                    lineHeight: `${item.lineHeight}px`,
                    letterSpacing:
                      "letterSpacing" in item
                        ? `${item.letterSpacing}px`
                        : "0px",
                  }}
                >
                  Aa {item.token}
                </span>
              ),
            },
          ])}
        />
      </section>

      <section id="weights" className="flex h-[250px] w-full flex-col gap-2.5">
        <h2 className="h-5 px-3 text-sm leading-5 font-medium text-text-primary">
          Weights
        </h2>
        <FoundationTable
          columns={[
            { label: "Class", width: 194 },
            { label: "Weight", width: 390 },
          ]}
          rows={foundationData.typography.weights.map((item) => [
            { content: item.class, mono: true },
            String(item.value),
          ])}
        />
        <p className="h-10 px-3 text-sm leading-5 font-normal text-text-secondary">
          These are Tailwind stock classes as used across the Tally components
          (<span className="text-text-primary">font-medium 500</span> is the
          workhorse); they are documented here, not yet tokens.
        </p>
      </section>

      <section id="source-of-truth" className="flex h-16 w-full flex-col gap-1 px-3">
        <h2 className="text-sm leading-5 font-medium text-text-primary">
          Source of truth
        </h2>
        <p className="text-sm leading-5 font-normal text-text-secondary">
          These are the source-of-truth Typography values from Figma’s{" "}
          <InlineCode>Typography</InlineCode> variable collection and 40 local
          text styles.
        </p>
      </section>
    </DocsShell>
  );
}
