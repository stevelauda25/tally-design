import type { Metadata } from "next";
import { InlineCode } from "@/components/docs/inline-code";
import { FoundationTable } from "@/components/foundations/foundation-table";
import {
  ClearSpaceExamples,
  FullLogoPrimary,
  FullLogoVariants,
  GeneralPositionExamples,
  IncorrectUseExamples,
  LogoApplications,
  LogomarkPrimary,
  LogomarkVariants,
  MinimumSizeExamples,
} from "@/components/foundations/logo/logo-guidance";
import {
  OnThisPage,
  type OnThisPageItem,
} from "@/components/foundations/on-this-page";
import { DocsShell } from "@/components/layout/docs-shell";

export const metadata: Metadata = {
  title: "Logo",
};

const onThisPageItems: readonly OnThisPageItem[] = [
  { label: "Full logo", href: "#full-logo" },
  { label: "Logomark only", href: "#logomark-only" },
  { label: "Colors", href: "#colors" },
  { label: "Applications", href: "#applications" },
  { label: "Clear space", href: "#clear-space" },
  { label: "Minimize sizes", href: "#minimum-sizes" },
  { label: "General position", href: "#general-position" },
  { label: "Please don’t...", href: "#incorrect-usage" },
  { label: "Source of truth", href: "#source-of-truth" },
];

function Swatch({ color }: { color: string }) {
  const isWhite = color.toLowerCase() === "#ffffff";

  return (
    <span
      aria-hidden="true"
      className={`h-[18px] w-full rounded-[4px] ${
        isWhite ? "border-[0.5px] border-border-default" : ""
      }`}
      style={{ backgroundColor: color }}
    />
  );
}

export default function LogoPage() {
  return (
    <DocsShell
      pageTitle="Logo"
      activePath="/foundations/logo"
      breadcrumb={{ parent: "Fondations", current: "Logo" }}
      detailRail={<OnThisPage items={onThisPageItems} />}
      smoothAnchorScroll
    >
      <header className="flex h-[68px] w-full flex-col gap-1 px-3">
        <h1 className="text-base leading-6 font-medium text-text-primary">
          Our Logo
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

      <section id="full-logo" className="flex h-[538px] w-full flex-col gap-2.5">
        <div className="flex h-16 flex-col gap-1 px-3">
          <h2 className="text-sm leading-5 font-medium text-text-primary">
            Full logo
          </h2>
          <p className="text-sm leading-5 font-normal text-text-secondary">
            Our logo consists of the{" "}
            <span className="text-text-primary">Tally glyph</span> and{" "}
            <span className="text-text-primary">wordmark</span>. It serves as
            the primary logo for key brand applications, including partnerships
            and marketing materials.
          </p>
        </div>
        <FullLogoPrimary />
        <FullLogoVariants />
      </section>

      <section id="logomark-only" className="flex h-[538px] w-full flex-col gap-2.5">
        <div className="flex h-16 flex-col gap-1 px-3">
          <h2 className="text-sm leading-5 font-medium text-text-primary">
            Logomark only
          </h2>
          <p className="text-sm leading-5 font-normal text-text-secondary">
            The Tally name and symbols are key parts of our brand identity,
            helping customers recognize and trust Tally.
          </p>
        </div>
        <LogomarkPrimary />
        <LogomarkVariants />
      </section>

      <section id="colors" className="flex h-[210px] w-full flex-col gap-2.5">
        <div className="flex h-16 flex-col gap-1 px-3">
          <h2 className="text-sm leading-5 font-medium text-text-primary">
            Colors
          </h2>
          <p className="text-sm leading-5 font-normal text-text-secondary">
            The following palette defines our primary, secondary, and neutral
            colors, along with their hex and RGB values for consistent
            application.
          </p>
        </div>
        <FoundationTable
          columns={[
            { label: "Variant", width: 146 },
            { label: "Colors", width: 146 },
            { label: "Hex", width: 146 },
            { label: "RGB Colors", width: 146 },
          ]}
          rows={[
            [
              "Primary",
              <Swatch key="primary" color="#DF520C" />,
              { content: "#DF520C", mono: true },
              { content: "223, 82, 12", mono: true },
            ],
            [
              "Black",
              <Swatch key="black" color="#000000" />,
              { content: "#000000", mono: true },
              { content: "0, 0, 0", mono: true },
            ],
            [
              "White",
              <Swatch key="white" color="#FFFFFF" />,
              { content: "#ffffff", mono: true },
              { content: "255, 255, 255", mono: true },
            ],
          ]}
        />
      </section>

      <section id="applications" className="flex h-[218px] w-full flex-col gap-2.5">
        <h2 className="h-5 px-3 text-sm leading-5 font-medium text-text-primary">
          Applications
        </h2>
        <LogoApplications />
      </section>

      <section id="clear-space" className="flex h-[262px] w-full flex-col gap-2.5">
        <div className="flex h-16 flex-col gap-1 px-3">
          <h2 className="text-sm leading-5 font-medium text-text-primary">
            Clear space
          </h2>
          <p className="text-sm leading-5 font-normal text-text-secondary">
            To allow our logotype to stand out, do not place any objects such as
            graphics or text in the clear space shown.
          </p>
        </div>
        <ClearSpaceExamples />
      </section>

      <section id="minimum-sizes" className="flex h-[242px] w-full flex-col gap-2.5">
        <div className="flex h-11 flex-col gap-1 px-3">
          <h2 className="text-sm leading-5 font-medium text-text-primary">
            Minimize sizes
          </h2>
          <p className="text-sm leading-5 font-normal text-text-secondary">
            The logotype should always be legible. Never use it at sizes smaller
            than specified.
          </p>
        </div>
        <MinimumSizeExamples />
      </section>

      <section id="general-position" className="flex h-[460px] w-full flex-col gap-2.5">
        <div className="flex h-16 flex-col gap-1 px-3">
          <h2 className="text-sm leading-5 font-medium text-text-primary">
            General position
          </h2>
          <p className="text-sm leading-5 font-normal text-text-secondary">
            This general guidance applies to digital or print applications,
            including both portrait and landscape orientations.
          </p>
        </div>
        <GeneralPositionExamples />
      </section>

      <section id="incorrect-usage" className="flex h-[638px] w-full flex-col gap-2.5">
        <div className="flex h-11 flex-col gap-1 px-3">
          <h2 className="text-sm leading-5 font-medium text-text-primary">
            Please don&apos;t...
          </h2>
          <p className="text-sm leading-5 font-normal text-text-secondary">
            Avoid these common mistakes to maintain brand integrity.
          </p>
        </div>
        <IncorrectUseExamples />
      </section>

      <section id="source-of-truth" className="flex h-16 w-full flex-col gap-1 px-3">
        <h2 className="text-sm leading-5 font-medium text-text-primary">
          Source of truth
        </h2>
        <p className="text-sm leading-5 font-normal text-text-secondary">
          These are the source-of-truth logo guidance and assets from the
          approved Figma Logo frame at node <InlineCode>2136:4329</InlineCode>.
        </p>
      </section>
    </DocsShell>
  );
}
