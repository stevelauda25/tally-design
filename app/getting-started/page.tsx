import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/code-block";
import { InlineCode } from "@/components/docs/inline-code";
import { DocsShell } from "@/components/layout/docs-shell";

export const metadata: Metadata = {
  title: "Getting Started",
};

const installCode = "pnpm install\n\npnpm dev   # docs at http://localhost:5174";

const usageCode =
  "import { Button } from '@tally-ui/ui';\n" +
  "import '@tally-ui/tokens/theme.css';\n\n" +
  "<Button>Click me</Button>";

const presetCode =
  "import preset from '@tally-ui/tokens/tailwind-preset';\n\n" +
  "export default {\n" +
  "  presets: [preset],\n" +
  "  content: ['./index.html', './src/**/*.{ts,tsx,mdx}'],\n" +
  "};";

const sectionHeadingClass =
  "text-sm leading-5 font-medium tracking-[0] text-text-primary";
const bodyClass =
  "text-sm leading-5 font-normal tracking-[0] text-text-secondary";

export default function GettingStartedPage() {
  return (
    <DocsShell pageTitle="Getting Started" activePath="/getting-started">
      <header className="flex h-12 w-full flex-col gap-1 px-3">
        <h1 className="text-base leading-6 font-medium tracking-[0] text-text-primary">
          Getting Started
        </h1>
        <p className={bodyClass}>
          Tally’s design system includes tokens, components, and Tailwind, with
          light and dark mode.
        </p>
      </header>

      <div aria-hidden="true" className="relative h-0 w-full">
        <div className="absolute top-[-0.5px] left-3 h-px w-[656px] bg-border-subtle" />
      </div>

      <section
        aria-labelledby="install-heading"
        className="flex h-[150px] w-full flex-col gap-2.5"
      >
        <div className="flex h-5 shrink-0 items-center px-3">
          <h2 id="install-heading" className={sectionHeadingClass}>
            Install
          </h2>
        </div>
        <CodeBlock language="bash" source={installCode} height={120} />
      </section>

      <section
        aria-labelledby="use-heading"
        className="flex h-[200px] w-full flex-col gap-2.5"
      >
        <div className="flex h-5 shrink-0 items-center px-3">
          <h2 id="use-heading" className={sectionHeadingClass}>
            Use
          </h2>
        </div>
        <CodeBlock language="tsx" source={usageCode} height={140} />
        <p className={`h-5 shrink-0 px-3 ${bodyClass}`}>
          {"Wire the Tailwind preset in your app's tailwind.config.ts:"}
        </p>
      </section>

      <div className="flex h-[230px] w-full flex-col gap-2.5">
        <CodeBlock language="tsx" source={presetCode} height={180} />
        <p className={`h-10 shrink-0 px-3 ${bodyClass}`}>
          Both packages are local to this repo: <InlineCode>packages/tokens</InlineCode>{" "}
          <span className="whitespace-nowrap">
            (<InlineCode>@tally-ui/tokens</InlineCode>)
          </span>{" "}
          and{" "}
          <InlineCode>packages/ui</InlineCode>{" "}
          <span className="whitespace-nowrap">
            (<InlineCode>@tally-ui/ui</InlineCode>).
          </span>
        </p>
      </div>

      <section
        aria-labelledby="tokens-heading"
        className="flex h-[260px] w-full flex-col gap-2.5 px-3"
      >
        <h2 id="tokens-heading" className={`h-5 shrink-0 ${sectionHeadingClass}`}>
          How tokens work
        </h2>
        <div className={`h-[230px] shrink-0 ${bodyClass}`}>
          <p className="mb-2.5">Two layers, bridged by Tailwind:</p>
          <ul className="mb-2.5 list-disc pl-[21px]">
            <li>
              <span className="text-text-primary">Primitives</span>{" ("}
              <InlineCode>packages/tokens/src/primitives.ts</InlineCode>
              {") — raw color scales as \""}
              <span className="text-text-primary">R G B</span>
              {'" triples for alpha composition.'}
            </li>
            <li>
              <span className="text-text-primary">Semantic</span>{" ("}
              <InlineCode>packages/tokens/src/theme.css</InlineCode>
              {") — what components consume: "}
              <InlineCode>bg-canvas</InlineCode>{", "}
              <InlineCode>text-primary</InlineCode>{", "}
              <InlineCode>accent</InlineCode>{". Two scopes: "}
              <InlineCode>:root (light)</InlineCode>{" and "}
              <InlineCode>.dark</InlineCode>{"."}
            </li>
            <li>
              <span className="text-text-primary">Preset</span>{" ("}
              <InlineCode>packages/tokens/src/tailwind-preset.ts</InlineCode>
              {") — every semantic variable becomes a Tailwind utility ("}
              <InlineCode>bg-canvas</InlineCode>{", "}
              <InlineCode>border-default</InlineCode>{", "}
              <InlineCode>…</InlineCode>{")."}
            </li>
          </ul>
          <p className="mb-2.5">
            {"The token values were collected from tally-ui-source on 2026-07-21 and are this repo's token source — see the Foundations pages for the full scales."}
          </p>
          <p>
            Components never read tokens directly. They consume utility classes
            only.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="conventions-heading"
        className="flex h-[90px] w-full flex-col gap-2.5 px-3"
      >
        <h2
          id="conventions-heading"
          className={`h-5 shrink-0 ${sectionHeadingClass}`}
        >
          Component conventions
        </h2>
        <ul className={`h-[60px] shrink-0 list-disc pl-[21px] ${bodyClass}`}>
          <li>
            <span className="text-text-primary">TypeScript + React 18</span>{", "}
            <InlineCode>forwardRef</InlineCode>, semicolons, plain exports.
          </li>
          <li>
            <span className="text-text-primary">Classes composed</span> via{" "}
            <InlineCode>cn()</InlineCode>{" ("}
            <InlineCode>clsx + tailwind-merge</InlineCode>
            {") so consumers can override with "}
            <InlineCode>className</InlineCode> safely.
          </li>
        </ul>
      </section>

      <section
        aria-labelledby="shipped-heading"
        className="flex h-[90px] w-full flex-col gap-2.5 px-3"
      >
        <h2 id="shipped-heading" className={`h-5 shrink-0 ${sectionHeadingClass}`}>
          {"What's shipped"}
        </h2>
        <ul className={`h-[60px] shrink-0 list-disc pl-[21px] ${bodyClass}`}>
          <li>
            <span className="text-text-primary">15 atoms</span> — Button, Badge,
            Checkbox, Switch, Tag, Input, Text Area, Radio, Segmented Button,
            Slider, Loading Spinner, Avatar, Separator, List Base, Tooltip.
          </li>
          <li>
            <span className="text-text-primary">Foundations</span> — Color,
            Typography, Spacing, Radius, Elevation.
          </li>
        </ul>
      </section>
    </DocsShell>
  );
}
