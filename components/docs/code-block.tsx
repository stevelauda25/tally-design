"use client";

import { useEffect, useRef, useState } from "react";

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

const copiedStateDuration = 1600;

const copiedIconKeyframes: Keyframe[] = [
  { opacity: 0, transform: "scale(0.65)" },
  { opacity: 1, offset: 0.5, transform: "scale(1.14)" },
  { opacity: 1, offset: 0.75, transform: "scale(0.96)" },
  { opacity: 1, transform: "scale(1)" },
];

function CodeBlockIcon({ src }: { src: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 14 14"
      fill="none"
      className="size-3.5 shrink-0 text-text-primary"
    >
      <use href={`${src}#Frame`} />
    </svg>
  );
}

export function CodeBlock({ language, source, height }: CodeBlockProps) {
  const size = sizeClasses[height];
  const [copied, setCopied] = useState(false);
  const iconRef = useRef<HTMLSpanElement>(null);
  const resetTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current !== null) {
        window.clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  async function copySource() {
    try {
      await navigator.clipboard.writeText(source);
    } catch {
      return;
    }

    setCopied(true);

    if (resetTimeoutRef.current !== null) {
      window.clearTimeout(resetTimeoutRef.current);
    }

    window.requestAnimationFrame(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      iconRef.current?.animate(copiedIconKeyframes, {
        duration: 360,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      });
    });

    resetTimeoutRef.current = window.setTimeout(() => {
      setCopied(false);
      resetTimeoutRef.current = null;
    }, copiedStateDuration);
  }

  return (
    <div
      className={`relative flex w-full shrink-0 flex-col overflow-hidden rounded-card bg-background-primary shadow-card ${size.block}`}
    >
      <div className="flex h-9 shrink-0 items-center justify-between bg-background-subtle px-3 py-2 shadow-[inset_0_-0.5px_0_var(--color-border-default)]">
        <span className="text-sm leading-5 font-normal tracking-[0] text-text-secondary">
          {language}
        </span>
        <button
          type="button"
          aria-label={copied ? "Copied" : "Copy code"}
          className="relative size-3.5 shrink-0 appearance-none border-0 bg-transparent p-0"
          onClick={copySource}
        >
          <span ref={iconRef} aria-hidden="true" className="relative block size-3.5">
            <CodeBlockIcon
              src={
                copied
                  ? "/assets/icons/utility/check.svg"
                  : "/assets/icons/utility/copy.svg"
              }
            />
          </span>
          <span role="status" className="sr-only">
            {copied ? "Copied" : ""}
          </span>
        </button>
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
