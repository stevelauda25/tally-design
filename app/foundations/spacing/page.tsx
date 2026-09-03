import type { Metadata } from "next";
import { InlineCode } from "@/components/docs/inline-code";
import {
  OnThisPage,
  type OnThisPageItem,
} from "@/components/foundations/on-this-page";
import { ProvenanceCard } from "@/components/foundations/provenance-card";
import { DocsShell } from "@/components/layout/docs-shell";

export const metadata: Metadata = {
  title: "Spacing",
};

const onThisPageItems: readonly OnThisPageItem[] = [
  { label: "Spacing scale", href: "#spacing-scale" },
  { label: "The rem sizing model", href: "#rem-sizing-model" },
  {
    label: "Fixed component dimensions",
    href: "#fixed-component-dimensions",
  },
  { label: "Source of truth", href: "#source-of-truth" },
];

const spacingScale = [
  ["p-0", 0], ["p-0.5", 2], ["p-1", 4], ["p-1.5", 6],
  ["p-2", 8], ["p-2.5", 10], ["p-3", 12], ["p-3.5", 14],
  ["p-4", 16], ["p-5", 20], ["p-6", 24], ["p-7", 28],
  ["p-8", 32], ["p-9", 36], ["p-10", 40], ["p-11", 44],
  ["p-12", 48], ["p-14", 56], ["p-16", 64], ["p-20", 80],
  ["p-24", 96], ["p-28", 112], ["p-32", 128], ["p-36", 144],
  ["p-40", 160], ["p-44", 176], ["p-48", 192], ["p-52", 208],
  ["p-56", 224], ["p-60", 240], ["p-64", 256], ["p-72", 288],
  ["p-80", 320], ["p-96", 384],
] as const;

export default function SpacingPage() {
  return (
    <DocsShell
      pageTitle="Spacing"
      activePath="/foundations/spacing"
      breadcrumb={{ parent: "Fondations", current: "Spacing" }}
      detailRail={<OnThisPage items={onThisPageItems} />}
      smoothAnchorScroll
    >
      <header className="flex h-12 w-full flex-col gap-1 px-3">
        <h1 className="text-base leading-6 font-medium text-text-primary">
          Spacing
        </h1>
        <p className="text-sm leading-5 font-normal text-text-secondary">
          Spacing conventions from{" "}
          <span className="text-text-primary">tally-ui-source</span>, collected
          on 2026-08-12.
        </p>
      </header>

      <div aria-hidden="true" className="relative h-0 w-full">
        <div className="absolute top-[-0.5px] left-0 h-px w-full bg-border-subtle" />
      </div>

      <ProvenanceCard height={88}>
        These tokens were collected from{" "}
        <span className="text-text-primary">tally-ui-source</span> on
        2026-08-12 and are used as this repo&apos;s token source.
      </ProvenanceCard>

      <section id="spacing-scale" className="flex h-[1366px] w-full flex-col gap-2.5">
        <div className="flex h-16 flex-col gap-1 px-3">
          <h2 className="text-sm leading-5 font-medium text-text-primary">
            Spacing scale
          </h2>
          <p className="text-sm leading-5 font-normal text-text-secondary">
            Tally defines no custom spacing tokens — both apps use Tailwind&apos;s
            default 4px-based scale. This is that scale:
          </p>
        </div>

        <div className="relative h-[1292px] w-full overflow-hidden rounded-card bg-background-primary shadow-card">
          {spacingScale.map(([token, value], index) => (
            <div
              key={token}
              className={`flex h-[38px] w-full items-center gap-2.5 px-3 py-1 ${
                index < spacingScale.length - 1
                  ? "border-b-[0.5px] border-border-default"
                  : ""
              }`}
            >
              <div className="flex h-[30px] w-[100px] shrink-0 items-center py-1.5">
                <InlineCode>{token}</InlineCode>
              </div>
              <div className="flex w-10 shrink-0 items-center py-1.5 text-xs leading-[18px] font-normal text-text-primary">
                {value}px
              </div>
              <div className="flex min-w-0 flex-1 items-center py-1.5">
                <div
                  aria-hidden="true"
                  className="h-[18px] shrink-0 rounded-[4px] bg-background-accent"
                  style={{ width: value }}
                />
              </div>
            </div>
          ))}
          <span className="pointer-events-none absolute inset-0 rounded-[inherit] border-[0.5px] border-border-default" />
        </div>
      </section>

      <section id="rem-sizing-model" className="flex h-[104px] w-full flex-col gap-1 px-3">
        <h2 className="text-sm leading-5 font-medium text-text-primary">
          The rem sizing model
        </h2>
        <p className="text-sm leading-5 font-normal text-text-secondary">
          Component dimensions (panel heights, input heights, icon sizes) are
          authored in rem against the fixed 16px root font-size —{" "}
          <span className="font-medium text-text-primary">&quot;THE ONE KNOB&quot;</span>
          {" — so the whole UI scales proportionally from that single value. See "}
          <span className="font-medium text-text-primary">Typography</span> for
          the type tokens that share this model.
        </p>
      </section>

      <section
        id="fixed-component-dimensions"
        className="flex h-[84px] w-full flex-col gap-1 px-3"
      >
        <h2 className="text-sm leading-5 font-medium text-text-primary">
          Fixed component dimensions
        </h2>
        <p className="text-sm leading-5 font-normal text-text-secondary">
          Fixed dimensions (e.g. panel heights, sidebar width 15rem) are not
          tokens — they are documented per-component in the collection&apos;s
          component inventories. If the design system wants a spacing scale
          later, that is a new decision, not an extraction.
        </p>
      </section>

      <section id="source-of-truth" className="flex h-[124px] w-full flex-col gap-1 px-3">
        <h2 className="text-sm leading-5 font-medium text-text-primary">
          Source of truth
        </h2>
        <p className="text-sm leading-5 font-normal text-text-secondary">
          Tally currently uses Tailwind&apos;s default 4px-based spacing scale,
          where <InlineCode>1</InlineCode> = <InlineCode>0.25rem</InlineCode> ={" "}
          <InlineCode>4px</InlineCode>. See the{" "}
          <a
            href="https://v2.tailwindcss.com/docs/customizing-spacing#default-spacing-scale"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind default spacing scale
          </a>{"."} No separate local custom Tally spacing-token source is defined.
        </p>
      </section>
    </DocsShell>
  );
}
