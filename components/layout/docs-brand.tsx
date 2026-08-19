import { IconMask } from "@/components/ui/icon-mask";

export function DocsBrand() {
  return (
    <div className="col-start-1 row-start-1 flex h-16 items-center justify-between px-5 py-4 shadow-[inset_-1px_0_0_var(--color-border-default),inset_0_-1px_0_var(--color-border-default)]">
      <div className="flex h-8 items-center">
        <IconMask
          src="/assets/brand/tally-ui.svg"
          className="h-8 w-[34px] text-text-primary"
        />
        <p className="whitespace-nowrap text-sm leading-5 tracking-[0]">
          <span className="font-semibold text-text-primary">Tally UI</span>
          <span className="font-normal text-text-secondary"> Design System</span>
        </p>
      </div>

      <code className="inline-flex items-center rounded-[6px] bg-background-secondary px-1.5 py-0.5 font-mono text-sm leading-[1.4] font-medium tracking-[0] text-text-secondary">
        v.1.0
      </code>
    </div>
  );
}
