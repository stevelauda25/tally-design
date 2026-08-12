import Image from "next/image";

type CodeBlockHeight = 120 | 140 | 180;

type CodeBlockProps = {
  language: string;
  source: string;
  height: CodeBlockHeight;
};

const sizeClasses: Record<
  CodeBlockHeight,
  { block: string; body: string }
> = {
  120: { block: "h-[120px]", body: "h-[84px]" },
  140: { block: "h-[140px]", body: "h-[104px]" },
  180: { block: "h-[180px]", body: "h-[144px]" },
};

export function CodeBlock({ language, source, height }: CodeBlockProps) {
  const size = sizeClasses[height];

  return (
    <div
      className={`relative flex w-full shrink-0 flex-col overflow-hidden rounded-card bg-background-primary shadow-card ${size.block}`}
    >
      <div className="flex h-9 shrink-0 items-center justify-between bg-background-subtle px-3 py-2 shadow-[inset_0_-0.5px_0_var(--color-border-default)]">
        <span className="text-sm leading-5 font-normal tracking-[0] text-text-secondary">
          {language}
        </span>
        <span aria-hidden="true" className="relative size-3.5 shrink-0">
          <Image
            src="/assets/icons/utility/copy.svg"
            alt=""
            width={14}
            height={14}
            unoptimized
          />
        </span>
      </div>

      <div className={`shrink-0 overflow-hidden p-3 ${size.body}`}>
        <pre className="m-0 whitespace-pre-wrap font-mono text-[14px] leading-5 font-normal tracking-[0] text-text-primary">
          {source}
        </pre>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] border-[0.5px] border-border-default"
      />
    </div>
  );
}
