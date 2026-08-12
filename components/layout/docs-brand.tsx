import Image from "next/image";
import { IconButton } from "@/components/ui/icon-button";

export function DocsBrand() {
  return (
    <div className="col-start-1 row-start-1 flex h-16 items-center justify-between px-5 py-4 shadow-[inset_-1px_0_0_var(--color-border-default),inset_0_-1px_0_var(--color-border-default)]">
      <div className="flex h-8 items-center">
        <Image
          src="/assets/brand/tally-ui.svg"
          alt=""
          width={34}
          height={32}
          priority
          unoptimized
        />
        <p className="whitespace-nowrap text-sm leading-5 tracking-[0]">
          <span className="font-semibold text-text-primary">Tally UI</span>
          <span className="font-normal text-text-secondary"> Design System</span>
        </p>
      </div>

      <IconButton label="Search" icon="/assets/icons/utility/search.svg" />
    </div>
  );
}
