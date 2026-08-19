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
  title: "Elevation",
};

const onThisPageItems: readonly OnThisPageItem[] = [
  { label: "Token shadows", href: "#token-shadows" },
  { label: "Source of truth", href: "#source-of-truth" },
];

const shadowRows = [
  foundationData.elevation.slice(0, 2),
  foundationData.elevation.slice(2, 4),
];

export default function ElevationPage() {
  return (
    <DocsShell
      pageTitle="Elevation"
      activePath="/foundations/elevation"
      breadcrumb={{ parent: "Fondations", current: "Elevation" }}
      detailRail={<OnThisPage items={onThisPageItems} />}
      smoothAnchorScroll
    >
      <header className="flex h-12 w-full flex-col gap-1 px-3">
        <h1 className="text-base leading-6 font-medium text-text-primary">
          Elevation
        </h1>
        <p className="text-sm leading-5 font-normal text-text-secondary">
          Shadow tokens collected from{" "}
          <span className="text-text-primary">tally-ui-source</span>, collected
          on 2026-08-12.
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

      <section id="token-shadows" className="flex h-[834px] w-full flex-col gap-2.5">
        <div className="flex h-[84px] flex-col gap-1 px-3">
          <h2 className="text-sm leading-5 font-medium text-text-primary">
            Token shadows
          </h2>
          <p className="text-sm leading-5 font-normal text-text-secondary">
            Four token shadows: two surface elevations (elev-1, elev-2) and two
            interactive shadows (button, pop), built from layered black/white
            rgba values rather than a tinted base.
          </p>
        </div>

        <div className="flex h-[740px] w-full flex-col gap-2.5">
          <div className="relative flex h-[560px] w-full flex-col gap-6 overflow-hidden rounded-card bg-background-primary p-6 shadow-card">
            {shadowRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex w-full shrink-0 items-start gap-6">
                {row.map((item) => (
                  <div key={item.token} className="flex min-w-0 flex-1 flex-col items-center gap-4">
                    <div
                      className="relative flex h-[120px] w-full shrink-0 items-center justify-center rounded-card border-[0.5px] border-border-default bg-background-primary"
                      style={{ boxShadow: item.value }}
                    >
                      <code className="font-mono text-xs leading-[18px] font-normal text-text-secondary">
                        {item.token}
                      </code>
                    </div>
                    <code className="w-full break-words text-center font-mono text-xs leading-[18px] font-normal text-text-tertiary">
                      box-shadow: {item.value};
                    </code>
                  </div>
                ))}
              </div>
            ))}
            <span className="pointer-events-none absolute inset-0 rounded-[inherit] border-[0.5px] border-border-default" />
          </div>

          <FoundationTable
            columns={[
              { label: "Token", width: 292 },
              { label: "Use", width: 292 },
            ]}
            rows={foundationData.elevation.map((item) => [
              { content: item.token, mono: true },
              item.use,
            ])}
          />
        </div>
      </section>

      <section id="source-of-truth" className="flex h-16 w-full flex-col gap-1 px-3">
        <h2 className="text-sm leading-5 font-medium text-text-primary">
          Source of truth
        </h2>
        <p className="text-sm leading-5 font-normal text-text-secondary">
          These are the source-of-truth Elevation values from Figma’s{" "}
          <InlineCode>Shadow-001</InlineCode>,{" "}
          <InlineCode>Shadow-002</InlineCode>,{" "}
          <InlineCode>Shadow-003</InlineCode>, and{" "}
          <InlineCode>Shadow-button</InlineCode> effect styles.
        </p>
      </section>
    </DocsShell>
  );
}
