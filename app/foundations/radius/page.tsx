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
  title: "Radius",
};

const onThisPageItems: readonly OnThisPageItem[] = [
  { label: "Scale", href: "#scale" },
  { label: "Source of truth", href: "#source-of-truth" },
];

export default function RadiusPage() {
  return (
    <DocsShell
      pageTitle="Radius"
      activePath="/foundations/radius"
      breadcrumb={{ parent: "Fondations", current: "Radius" }}
      detailRail={<OnThisPage items={onThisPageItems} />}
      smoothAnchorScroll
    >
      <header className="flex h-12 w-full flex-col gap-1 px-3">
        <h1 className="text-base leading-6 font-medium text-text-primary">
          Radius
        </h1>
        <p className="text-sm leading-5 font-normal text-text-secondary">
          Corner-radius scale collected from{" "}
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

      <section id="scale" className="flex h-[1004px] w-full flex-col gap-2.5">
        <div className="flex h-[104px] flex-col gap-1 px-3">
          <h2 className="text-sm leading-5 font-medium text-text-primary">
            Scale
          </h2>
          <p className="text-sm leading-5 font-normal text-text-secondary">
            9 steps, 0px → 9999px. The same review round later extended the
            scale with <span className="text-text-primary">none (0px)</span> for
            sharp edges, <span className="text-text-primary">2xs (2px)</span>
            {" for hairline rounding on tiny controls, "}
            <span className="text-text-primary">10 (10px)</span> between md and
            lg, and <span className="text-text-primary">full (9999px)</span> for
            pills and circles. Sample boxes below are filled with the collected
            orange-vivid-600.
          </p>
        </div>

        <div className="flex h-[890px] w-full flex-col gap-2.5">
          <div className="relative h-[540px] w-full overflow-hidden rounded-card bg-background-primary shadow-card">
            {foundationData.radius.map((item, index) => (
              <div
                key={item.token}
                className={`flex h-[60px] items-center gap-2.5 px-3 ${
                  index < foundationData.radius.length - 1
                    ? "border-b-[0.5px] border-border-default"
                    : ""
                }`}
              >
                <div className="flex w-[230px] shrink-0 items-center py-1.5">
                  <InlineCode>{item.token}</InlineCode>
                </div>
                <div className="flex w-11 shrink-0 items-center py-1.5 text-xs leading-[18px] text-text-primary">
                  {item.value}px
                </div>
                <div className="flex min-w-0 flex-1 items-center py-1.5">
                  <div
                    aria-hidden="true"
                    className="size-12 shrink-0 bg-background-accent"
                    style={{ borderRadius: item.value }}
                  />
                </div>
              </div>
            ))}
            <span className="pointer-events-none absolute inset-0 rounded-[inherit] border-[0.5px] border-border-default" />
          </div>

          <FoundationTable
            columns={[
              { label: "Token", width: 120 },
              { label: "Value", width: 120 },
              { label: "Typical use", width: 344 },
            ]}
            rows={foundationData.radius.map((item) => [
              { content: item.token, mono: true },
              `${item.value}px`,
              item.use,
            ])}
          />
        </div>
      </section>

      <section id="source-of-truth" className="flex h-11 w-full flex-col gap-1 px-3">
        <h2 className="text-sm leading-5 font-medium text-text-primary">
          Source of truth
        </h2>
        <p className="text-sm leading-5 font-normal text-text-secondary">
          These are the source-of-truth Radius tokens from Figma’s{" "}
          <InlineCode>Radius</InlineCode> variable collection.
        </p>
      </section>
    </DocsShell>
  );
}
