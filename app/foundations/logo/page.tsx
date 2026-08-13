import type { Metadata } from "next";
import { InlineCode } from "@/components/docs/inline-code";
import { FigmaAsset } from "@/components/foundations/figma-asset";
import { FoundationTable } from "@/components/foundations/foundation-table";
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
  { label: "Minimize Sizes", href: "#minimum-sizes" },
  { label: "General Position", href: "#general-position" },
  { label: "Please don’t...", href: "#incorrect-usage" },
  { label: "Source of truth", href: "#source-of-truth" },
];

function Swatch({ color }: { color: string }) {
  return (
    <span
      aria-hidden="true"
      className="h-2 w-[84px] rounded-[2px]"
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
            Full Logo
          </h2>
          <p className="text-sm leading-5 font-normal text-text-secondary">
            Our logo consists of the{" "}
            <span className="text-text-primary">Tally glyph</span> and{" "}
            <span className="text-text-primary">wordmark</span>. It serves as
            the primary logo for key brand applications, including partnerships
            and marketing materials.
          </p>
        </div>
        <FigmaAsset
          src="/assets/foundations/logo/full-primary.png"
          alt="Annotated Tally glyph and wordmark composing the primary logo"
          width={584}
          height={200}
        />
        <FigmaAsset
          src="/assets/foundations/logo/full-variants.png"
          alt="White and black full-logo variants"
          width={584}
          height={254}
        />
      </section>

      <section id="logomark-only" className="flex h-[538px] w-full flex-col gap-2.5">
        <div className="flex h-16 flex-col gap-1 px-3">
          <h2 className="text-sm leading-5 font-medium text-text-primary">
            Logomark Only
          </h2>
          <p className="text-sm leading-5 font-normal text-text-secondary">
            The Tally name and symbols are key parts of our brand identity,
            helping customers recognize and trust Tally.
          </p>
        </div>
        <FigmaAsset
          src="/assets/foundations/logo/mark-primary.png"
          alt="Primary Tally glyph"
          width={584}
          height={200}
        />
        <FigmaAsset
          src="/assets/foundations/logo/mark-variants.png"
          alt="White and black Tally glyph variants"
          width={584}
          height={254}
        />
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
            { label: "Primary", width: 146 },
            { label: "Black", width: 146 },
            { label: "White", width: 146 },
          ]}
          rows={[
            ["", <Swatch key="primary" color="#DF520C" />, <Swatch key="black" color="#000000" />, <Swatch key="white" color="#FFFFFF" />],
            ["Hex", "#DF520C", "#000000", "#FFFFFF"],
            ["RGB Colors", "223, 82, 12", "0, 0, 0", "255, 255, 255"],
          ]}
        />
      </section>

      <section id="applications" className="flex h-[218px] w-full flex-col gap-2.5">
        <h2 className="h-5 px-3 text-sm leading-5 font-medium text-text-primary">
          Applications
        </h2>
        <FigmaAsset
          src="/assets/foundations/logo/applications.png"
          alt="Tally logo application examples"
          width={584}
          height={188}
        />
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
        <FigmaAsset
          src="/assets/foundations/logo/clear-space.png"
          alt="Clear-space guidance for the Tally logo and glyph"
          width={584}
          height={188}
        />
      </section>

      <section id="minimum-sizes" className="flex h-[242px] w-full flex-col gap-2.5">
        <div className="flex h-11 flex-col gap-1 px-3">
          <h2 className="text-sm leading-5 font-medium text-text-primary">
            Minimize Sizes
          </h2>
          <p className="text-sm leading-5 font-normal text-text-secondary">
            The logotype should always be legible. Never use it at sizes smaller
            than specified.
          </p>
        </div>
        <FigmaAsset
          src="/assets/foundations/logo/minimum-sizes.png"
          alt="Minimum logo sizes: 60px screen, 35mm or 1.375 inches print, and 16px favicon"
          width={584}
          height={188}
        />
      </section>

      <section id="general-position" className="flex h-[460px] w-full flex-col gap-2.5">
        <div className="flex h-16 flex-col gap-1 px-3">
          <h2 className="text-sm leading-5 font-medium text-text-primary">
            General Position
          </h2>
          <p className="text-sm leading-5 font-normal text-text-secondary">
            This general guidance applies to digital or print applications,
            including both portrait and landscape orientations.
          </p>
        </div>
        <FigmaAsset
          src="/assets/foundations/logo/position-primary.png"
          alt="Recommended Tally logo positions"
          width={584}
          height={188}
        />
        <FigmaAsset
          src="/assets/foundations/logo/position-secondary.png"
          alt="Additional recommended Tally logo positions"
          width={584}
          height={188}
        />
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
        <FigmaAsset src="/assets/foundations/logo/dont-row-1.png" alt="Do not change the logo color or squash the logo" width={584} height={188} />
        <FigmaAsset src="/assets/foundations/logo/dont-row-2.png" alt="Do not outline the logo or fill it with gradients" width={584} height={188} />
        <FigmaAsset src="/assets/foundations/logo/dont-row-3.png" alt="Do not place the logo over a busy background or skew it" width={584} height={188} />
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
