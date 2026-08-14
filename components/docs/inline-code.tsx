import type { ReactNode } from "react";

type InlineCodeProps = {
  children: ReactNode;
};

export function InlineCode({ children }: InlineCodeProps) {
  return (
    <code
      className="box-border inline-flex h-4 items-center whitespace-nowrap rounded-[3px] border-[0.5px] border-border-strong bg-background-primary px-1 py-0.5 align-middle font-mono text-xs leading-3 font-medium tracking-[0] text-text-primary"
      style={{
        boxShadow:
          "0 0 0 0.6px var(--color-border-default), var(--shadow-card)",
      }}
    >
      {children}
    </code>
  );
}
