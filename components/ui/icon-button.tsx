import Image from "next/image";

type IconButtonProps = {
  label: string;
  icon: string;
};

export function IconButton({ label, icon }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className="relative inline-flex size-[30px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-primary p-2 after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:border-[0.5px] after:border-border-default"
    >
      <Image
        className="size-3.5 shrink-0"
        src={icon}
        alt=""
        width={14}
        height={14}
        unoptimized
      />
    </button>
  );
}
