import type { MouseEventHandler } from "react";
import { IconMask } from "@/components/ui/icon-mask";

type IconButtonProps = {
  label: string;
  icon: string;
  pressed?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export function IconButton({
  label,
  icon,
  pressed,
  onClick,
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      onClick={onClick}
      className="relative inline-flex size-[30px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-primary p-2 text-text-primary hover:bg-background-secondary after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:border-[0.5px] after:border-border-default"
    >
      <IconMask src={icon} />
    </button>
  );
}
