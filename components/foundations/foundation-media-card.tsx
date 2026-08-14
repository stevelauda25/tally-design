import type { ReactNode } from "react";

type FoundationMediaCardProps = {
  children: ReactNode;
  className?: string;
};

export function FoundationMediaCard({
  children,
  className = "",
}: FoundationMediaCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-card bg-background-subtle shadow-card ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] border-[0.5px] border-border-default"
      />
    </div>
  );
}
