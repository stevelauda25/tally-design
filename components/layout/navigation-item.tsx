import Link from "next/link";
import type { CSSProperties, MouseEventHandler } from "react";

type NavigationItemProps = {
  label: string;
  href?: string;
  icon?: string;
  trailingIcon?: string;
  active?: boolean;
  nested?: boolean;
  expanded?: boolean;
  controls?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

function NavigationIcon({
  src,
  flipped = false,
}: {
  src: string;
  flipped?: boolean;
}) {
  const maskStyles: CSSProperties = {
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "contain",
    maskSize: "contain",
  };

  return (
    <span
      aria-hidden="true"
      className={`size-3.5 shrink-0 bg-current ${flipped ? "-scale-y-100" : ""}`}
      style={maskStyles}
    />
  );
}

export function NavigationItem({
  label,
  href,
  icon,
  trailingIcon,
  active = false,
  nested = false,
  expanded,
  controls,
  onClick,
}: NavigationItemProps) {
  const className = [
    "flex h-8 w-full items-center rounded-navigation py-1.5 text-sm leading-5 font-normal tracking-[0] hover:bg-background-secondary hover:text-text-primary",
    nested ? "px-[34px]" : "gap-2.5 px-2.5",
    active ? "bg-background-secondary text-text-primary" : "text-text-secondary",
  ].join(" ");

  const content = (
    <>
      {icon ? (
        <NavigationIcon src={icon} />
      ) : null}
      <span className="min-w-0 flex-1 text-left">{label}</span>
      {trailingIcon ? (
        <NavigationIcon src={trailingIcon} flipped={expanded} />
      ) : null}
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        className={className}
        aria-expanded={expanded}
        aria-controls={controls}
        onClick={onClick}
      >
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} className={className} aria-current={active ? "page" : undefined}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
