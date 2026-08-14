import type { Metadata } from "next";
import type { ReactNode } from "react";
import { InlineCode } from "@/components/docs/inline-code";
import { DocsShell } from "@/components/layout/docs-shell";

export const metadata: Metadata = {
  title: "Changelog",
};

type ChangelogEntryProps = {
  children: ReactNode;
  date: string;
  height: 82 | 122;
  headingId: string;
  title: string;
};

function ChangelogEntry({
  children,
  date,
  height,
  headingId,
  title,
}: ChangelogEntryProps) {
  return (
    <section
      aria-labelledby={headingId}
      className="flex w-full flex-col gap-2.5 px-3"
      style={{ height }}
    >
      <time
        dateTime={date}
        className="inline-flex h-[22px] w-[86px] shrink-0 items-center justify-center rounded-full border-[0.5px] border-border-default bg-background-subtle px-2 py-0.5 text-xs leading-[18px] font-medium tracking-[0] text-text-secondary shadow-card"
      >
        {date}
      </time>

      <h2
        id={headingId}
        className="h-5 shrink-0 text-sm leading-5 font-medium tracking-[0] text-text-primary"
      >
        {title}
      </h2>

      <ul className="list-disc pl-[21px] text-sm leading-5 font-normal tracking-[0] text-text-secondary">
        <li>{children}</li>
      </ul>
    </section>
  );
}

function Divider() {
  return (
    <div aria-hidden="true" className="relative h-0 w-full">
      <div className="absolute top-[-0.5px] left-3 h-px w-[656px] bg-border-subtle" />
    </div>
  );
}

export default function ChangelogPage() {
  return (
    <DocsShell pageTitle="Changelog" activePath="/changelog">
      <header className="flex h-12 w-full flex-col gap-1 px-3">
        <h1 className="text-base leading-6 font-medium tracking-[0] text-text-primary">
          Changelog
        </h1>
        <p className="text-sm leading-5 font-normal tracking-[0] text-text-secondary">
          Key design system changes. <InlineCode>@tally-ui/ui</InlineCode> and{" "}
          <InlineCode>@tally-ui/tokens</InlineCode> are updated together.
        </p>
      </header>

      <Divider />

      <ChangelogEntry
        date="2026-08-12"
        height={122}
        headingId="foundations-release-heading"
        title="Foundations"
      >
        Collected Tally’s core design foundations from{" "}
        <span className="text-text-primary">tally-ui-source</span>, including{" "}
        <span className="text-text-primary">
          color, typography, spacing, radius, elevation, gradient, logo, and
          imagery
        </span>
        {". These tokens serve as the foundation for the design system."}
      </ChangelogEntry>

      <ChangelogEntry
        date="2026-08-12"
        height={82}
        headingId="initial-release-heading"
        title="Initial Release"
      >
        Tally design system development started on{" "}
        <span className="text-text-primary">2026-08-12</span>.
      </ChangelogEntry>

      <Divider />

      <footer className="flex h-[18px] w-full items-center justify-center gap-1.5 px-3 text-xs leading-[18px] font-normal tracking-[0] text-text-secondary">
        <span className="whitespace-nowrap">
          <span className="font-medium">Tally UI</span> Design System
        </span>
        <code className="inline-flex h-[18px] w-12 shrink-0 items-center justify-center rounded-[3px] bg-background-secondary px-[5px] py-[3px] font-mono text-xs leading-3 font-medium tracking-[0] text-text-secondary">
          v.1.0
        </code>
      </footer>
    </DocsShell>
  );
}
