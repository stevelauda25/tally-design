import type { Metadata } from "next";
import Image from "next/image";
import { InlineCode } from "@/components/docs/inline-code";
import { FoundationMediaCard } from "@/components/foundations/foundation-media-card";
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

const photography = [
  ["photo-1.png", "Analog Film Editorial inventory photography example 1", "center"],
  ["photo-2.png", "Analog Film Editorial inventory photography example 2", "center"],
  ["photo-3.png", "Analog Film Editorial inventory photography example 3", "center"],
  ["photo-4.png", "Analog Film Editorial inventory photography example 4", "top"],
] as const;

const applications = [
  ["application-1.png", "Tally billboard imagery application"],
  ["application-2.png", "Tally street-poster imagery application"],
] as const;

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
          {photography.map(([src, alt, position]) => (
            <FoundationMediaCard key={src} className="h-[188px] w-[287px]">
              <Image
                src={`/assets/foundations/imagery/${src}`}
                alt={alt}
                width={1448}
                height={1086}
                className={`absolute left-1/2 h-[215px] w-[287px] -translate-x-1/2 object-cover ${
                  position === "top"
                    ? "top-[-0.5px]"
                    : "top-[calc(50%+0.5px)] -translate-y-1/2"
                }`}
                unoptimized
              />
            </FoundationMediaCard>
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
          {["pattern-1.svg", "pattern-2.svg"].map((src, index) => (
            <FoundationMediaCard
              key={src}
              className="h-[188px] w-[287px] bg-[#fafafa]"
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-[71.5px] h-full border-l-[0.5px] border-dashed border-[#0000000d]"
              />
              <span
                aria-hidden="true"
                className="absolute top-0 left-[215.5px] h-full border-l-[0.5px] border-dashed border-[#0000000d]"
              />
              <span
                aria-hidden="true"
                className="absolute top-[22px] left-0 w-full border-t-[0.5px] border-dashed border-[#0000000d]"
              />
              <span
                aria-hidden="true"
                className="absolute top-[166px] left-0 w-full border-t-[0.5px] border-dashed border-[#0000000d]"
              />
              <span
                role="img"
                aria-label={
                  index === 0
                    ? "Tally vertical rectangular pattern"
                    : "Tally horizontal rectangular pattern"
                }
                className="absolute top-1/2 left-[calc(50%+0.5px)] size-36 -translate-x-1/2 -translate-y-1/2 bg-current text-text-primary"
                style={{
                  WebkitMaskImage: `url(/assets/foundations/imagery/${src})`,
                  maskImage: `url(/assets/foundations/imagery/${src})`,
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                }}
              />
            </FoundationMediaCard>
          ))}
        </div>
      </section>

      <section id="applications" className="flex h-[218px] w-full flex-col gap-2.5">
        <h2 className="h-5 px-3 text-sm leading-5 font-medium text-text-primary">
          Applications
        </h2>
        <div className="grid h-[188px] w-full grid-cols-[287px_287px] gap-2.5">
          {applications.map(([src, alt]) => (
            <FoundationMediaCard key={src} className="h-[188px] w-[287px]">
              <Image
                src={`/assets/foundations/imagery/${src}`}
                alt={alt}
                width={4000}
                height={3000}
                className="absolute top-[calc(50%+0.5px)] left-1/2 h-[215px] w-[287px] -translate-x-1/2 -translate-y-1/2 object-cover"
                unoptimized
              />
            </FoundationMediaCard>
          ))}
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
