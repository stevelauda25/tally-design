import type { Metadata } from "next";
import { InlineCode } from "@/components/docs/inline-code";
import { FigmaAsset } from "@/components/foundations/figma-asset";
import {
  OnThisPage,
  type OnThisPageItem,
} from "@/components/foundations/on-this-page";
import { DocsShell } from "@/components/layout/docs-shell";

export const metadata: Metadata = {
  title: "Imagery",
};

const onThisPageItems: readonly OnThisPageItem[] = [
  { label: "Photography", href: "#photography" },
  { label: "Pattern/texture", href: "#pattern-texture" },
  { label: "Applications", href: "#applications" },
  { label: "Source of truth", href: "#source-of-truth" },
];

export default function ImageryPage() {
  return (
    <DocsShell
      pageTitle="Imagery"
      activePath="/foundations/imagery"
      breadcrumb={{ parent: "Fondations", current: "Imagery" }}
      detailRail={<OnThisPage items={onThisPageItems} />}
      smoothAnchorScroll
    >
      <header className="flex h-[88px] w-full flex-col gap-1 px-3">
        <h1 className="text-base leading-6 font-medium text-text-primary">
          Imagery
        </h1>
        <p className="text-sm leading-5 font-normal text-text-secondary">
          Tally helps people manage real-world inventory. Our visual identity
          uses <span className="text-text-primary">Analog Film Editorial</span>
          {" photography to reflect the honest, everyday work behind every business, supported by a "}
          <span className="text-text-primary">Rectangular Pattern</span> that
          represents structure and order.
        </p>
      </header>

      <div aria-hidden="true" className="relative h-0 w-full">
        <div className="absolute top-[-0.5px] left-0 h-px w-full bg-border-subtle" />
      </div>

      <section id="photography" className="flex h-[460px] w-full flex-col gap-2.5">
        <div className="flex h-16 flex-col gap-1 px-3">
          <h2 className="text-sm leading-5 font-medium text-text-primary">
            Photography
          </h2>
          <p className="text-sm leading-5 font-normal text-text-secondary">
            Tally is built for real businesses managing real inventory. Our{" "}
            <span className="text-text-primary">Analog Film Editorial</span>
            {" photography captures the honest, hands-on work behind every business."}
          </p>
        </div>
        <div className="grid h-[386px] w-full grid-cols-[287px_287px] grid-rows-[188px_188px] gap-2.5">
          {[1, 2, 3, 4].map((index) => (
            <FigmaAsset
              key={index}
              src={`/assets/foundations/imagery/photo-${index}.png`}
              alt={`Analog Film Editorial inventory photography example ${index}`}
              width={287}
              height={188}
            />
          ))}
        </div>
      </section>

      <section id="pattern-texture" className="flex h-[262px] w-full flex-col gap-2.5">
        <div className="flex h-16 flex-col gap-1 px-3">
          <h2 className="text-sm leading-5 font-medium text-text-primary">
            Pattern/texture
          </h2>
          <p className="text-sm leading-5 font-normal text-text-secondary">
            We use a <span className="text-text-primary">Rectangular Pattern</span>
            {" to add structure and reinforce Tally’s organized approach to inventory."}
          </p>
        </div>
        <div className="grid h-[188px] w-full grid-cols-[287px_287px] gap-2.5">
          <FigmaAsset src="/assets/foundations/imagery/pattern-1.png" alt="Tally vertical rectangular pattern" width={287} height={188} />
          <FigmaAsset src="/assets/foundations/imagery/pattern-2.png" alt="Tally horizontal rectangular pattern" width={287} height={188} />
        </div>
      </section>

      <section id="applications" className="flex h-[218px] w-full flex-col gap-2.5">
        <h2 className="h-5 px-3 text-sm leading-5 font-medium text-text-primary">
          Applications
        </h2>
        <div className="grid h-[188px] w-full grid-cols-[287px_287px] gap-2.5">
          <FigmaAsset src="/assets/foundations/imagery/application-1.png" alt="Tally billboard imagery application" width={287} height={188} />
          <FigmaAsset src="/assets/foundations/imagery/application-2.png" alt="Tally street-poster imagery application" width={287} height={188} />
        </div>
      </section>

      <section id="source-of-truth" className="flex h-16 w-full flex-col gap-1 px-3">
        <h2 className="text-sm leading-5 font-medium text-text-primary">
          Source of truth
        </h2>
        <p className="text-sm leading-5 font-normal text-text-secondary">
          These are the source-of-truth imagery assets and guidance from the
          approved Figma Imagery frame at node{" "}
          <InlineCode>2199:12360</InlineCode>.
        </p>
      </section>
    </DocsShell>
  );
}
