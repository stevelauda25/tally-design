import Image from "next/image";

const assetRoot = "/assets/foundations/logo";

type LogoAssetProps = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
};

function LogoAsset({
  src,
  alt = "",
  width,
  height,
  className = "",
}: LogoAssetProps) {
  return (
    <Image
      src={`${assetRoot}/${src}`}
      alt={alt}
      width={width}
      height={height}
      className={className}
      unoptimized
    />
  );
}

function CardBorder() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-[inherit] border-[0.5px] border-border-default"
    />
  );
}

function HorizontalGuide({ top }: { top: string }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute left-0 w-full border-t-[0.5px] border-dashed border-[#0000000d]"
      style={{ top }}
    />
  );
}

function VerticalGuide({ left }: { left: string }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute top-0 h-full border-l-[0.5px] border-dashed border-[#0000000d]"
      style={{ left }}
    />
  );
}

function StandardGuides() {
  return (
    <>
      <HorizontalGuide top="16px" />
      <HorizontalGuide top="50%" />
      <HorizontalGuide top="calc(100% - 16px)" />
      <VerticalGuide left="16px" />
      <VerticalGuide left="50%" />
      <VerticalGuide left="calc(100% - 16px)" />
    </>
  );
}

function FramedCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-card bg-[#fafafa] shadow-card ${className}`}
    >
      {children}
      <CardBorder />
    </div>
  );
}

function VariantCard({
  background,
  logo,
  logoAlt,
  logoWidth,
  logoHeight,
  title,
  description,
}: {
  background: "dark" | "dark-subtle" | "light";
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  title: string;
  description: string;
}) {
  return (
    <FramedCard className="flex h-[254px] flex-col bg-background-primary">
      <div
        className={`flex h-[200px] shrink-0 items-center justify-center border-b-[0.5px] border-border-default ${
          background === "dark-subtle"
            ? "bg-[#1a1a1a]"
            : background === "dark"
              ? "bg-black"
              : "bg-[#fafafa]"
        }`}
      >
        <LogoAsset
          src={logo}
          alt={logoAlt}
          width={logoWidth}
          height={logoHeight}
        />
      </div>
      <div className="flex h-[54px] flex-col gap-0.5 px-3 py-2 text-xs leading-[18px]">
        <p className="font-medium text-text-primary">{title}</p>
        <p className="font-normal text-text-secondary">{description}</p>
      </div>
    </FramedCard>
  );
}

export function FullLogoPrimary() {
  return (
    <FramedCard className="h-[200px] w-full">
      <LogoAsset
        src="full-primary.png"
        alt="Tally primary logo construction and annotation artwork"
        width={11680}
        height={4000}
        className="size-full object-cover"
      />
    </FramedCard>
  );
}

export function FullLogoVariants() {
  return (
    <div className="grid h-[254px] w-full grid-cols-2 gap-2.5">
      <VariantCard
        background="dark-subtle"
        logo="full-white.svg"
        logoAlt="White Tally logo"
        logoWidth={174}
        logoHeight={60}
        title="White logo"
        description="For dark backgrounds"
      />
      <VariantCard
        background="light"
        logo="full-black.svg"
        logoAlt="Black Tally logo"
        logoWidth={174}
        logoHeight={60}
        title="Black logo"
        description="For light backgrounds"
      />
    </div>
  );
}

export function LogomarkPrimary() {
  const verticals = ["218px", "248px", "278px", "307px", "337px", "366px"];
  const horizontals = ["26px", "56px", "85px", "115px", "145px", "174px"];

  return (
    <FramedCard className="h-[200px] w-full">
      {verticals.map((left) => (
        <VerticalGuide key={left} left={left} />
      ))}
      {horizontals.map((top) => (
        <HorizontalGuide key={top} top={top} />
      ))}
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 size-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.5px] border-dashed border-border-subtle"
      />
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 size-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.5px] border-dashed border-border-subtle"
      />
      <LogoAsset
        src="mark-orange.svg"
        alt="Tally logomark"
        width={89}
        height={89}
        className="absolute top-[calc(50%+0.5px)] left-[calc(50%+0.3px)] -translate-x-1/2 -translate-y-1/2"
      />
    </FramedCard>
  );
}

export function LogomarkVariants() {
  return (
    <div className="grid h-[254px] w-full grid-cols-2 gap-2.5">
      <VariantCard
        background="dark-subtle"
        logo="mark-white.svg"
        logoAlt="White Tally logomark"
        logoWidth={89}
        logoHeight={89}
        title="White Logo"
        description="For dark backgrounds"
      />
      <VariantCard
        background="light"
        logo="mark-black.svg"
        logoAlt="Black Tally logomark"
        logoWidth={89}
        logoHeight={89}
        title="Black Logo"
        description="For light backgrounds"
      />
    </div>
  );
}

export function LogoApplications() {
  const applications = [
    ["application-dock-flat.png", "Tally app icon in a desktop dock", 3760],
    ["application-sky-flat.png", "Tally app icon on a photographic background", 3760],
    ["application-browser-flat.png", "Tally logomark in a browser tab", 3760],
  ] as const;

  return (
    <div className="grid h-[188px] w-full grid-cols-3 gap-2.5">
      {applications.map(([src, alt, size]) => (
        <FramedCard key={src} className="h-[188px]">
          <Image
            src={`${assetRoot}/${src}`}
            alt={alt}
            width={size}
            height={size}
            className="size-full object-cover"
            unoptimized
          />
        </FramedCard>
      ))}
    </div>
  );
}

function ClearSpaceCard({ src, alt }: { src: string; alt: string }) {
  return (
    <FramedCard className="h-[188px]">
      <LogoAsset
        src={src}
        alt={alt}
        width={5740}
        height={3760}
        className="size-full object-cover"
      />
    </FramedCard>
  );
}

export function ClearSpaceExamples() {
  return (
    <div className="grid h-[188px] w-full grid-cols-2 gap-2.5">
      <ClearSpaceCard
        src="clear-space-full.png"
        alt="Tally full logo clear-space construction artwork"
      />
      <ClearSpaceCard
        src="clear-space-mark.png"
        alt="Tally logomark clear-space construction artwork"
      />
    </div>
  );
}

export function MinimumSizeExamples() {
  const sizes = [
    ["60px", "Screen"],
    ["35mm / 1.375 in", "Print"],
    ["16px", "Favicon"],
  ] as const;

  return (
    <div className="grid h-[188px] w-full grid-cols-3 gap-2.5">
      {sizes.map(([value, medium]) => (
        <FramedCard key={medium} className="h-[188px]">
          <LogoAsset
            src="full-orange.svg"
            alt="Tally minimum-size logo"
            width={60}
            height={21}
            className="absolute top-[84px] left-1/2 -translate-x-1/2"
          />
          <span
            aria-hidden="true"
            className="absolute top-[75px] left-1/2 h-[38px] w-[60px] -translate-x-1/2 border-y-[0.5px] border-dashed border-[#0000001a]"
          />
          <p className="absolute top-[120px] w-full text-center text-xs leading-[18px] font-medium text-background-accent">
            {value}
          </p>
          <p className="absolute top-[157px] w-full text-center text-xs leading-[18px] font-normal text-text-tertiary">
            {medium}
          </p>
        </FramedCard>
      ))}
    </div>
  );
}

type Position = { left: number; top: number };

function PositionCard({ positions }: { positions: readonly Position[] }) {
  return (
    <FramedCard className="h-[188px]">
      <StandardGuides />
      {positions.map(({ left, top }, index) => (
        <span
          key={`position-${left}-${top}-${index}`}
          className="absolute"
          style={{ left, top }}
        >
          <LogoAsset
            src="full-orange.svg"
            alt="Tally logo placement example"
            width={60}
            height={21}
          />
        </span>
      ))}
    </FramedCard>
  );
}

export function GeneralPositionExamples() {
  return (
    <div className="grid h-[386px] w-full grid-cols-2 grid-rows-2 gap-2.5">
      <PositionCard positions={[{ left: 113, top: 84 }]} />
      <PositionCard positions={[{ left: 16, top: 151 }]} />
      <PositionCard
        positions={[
          { left: 113, top: 16 },
          { left: 113, top: 84 },
          { left: 113, top: 151 },
        ]}
      />
      <PositionCard
        positions={[
          { left: 16, top: 16 },
          { left: 211, top: 16 },
          { left: 16, top: 151 },
          { left: 211, top: 151 },
        ]}
      />
    </div>
  );
}

type IncorrectUse = {
  caption: string;
  logo: string;
  width?: number;
  transform?: string;
  busy?: boolean;
};

function IncorrectUseCard({
  caption,
  logo,
  width = 60,
  transform,
  busy = false,
}: IncorrectUse) {
  return (
    <FramedCard className="flex h-[188px] flex-col bg-background-primary">
      <div
        className={`relative h-[154px] shrink-0 overflow-hidden border-b-[0.5px] border-border-default bg-[#fafafa] ${
          busy ? "[[data-theme=dark]_&]:border-b-0" : ""
        }`}
      >
        {busy ? (
          <span className="absolute top-[calc(50%-151.25px)] left-1/2 h-[479px] w-[609px] -translate-x-1/2 -translate-y-1/2">
            <LogoAsset
              src="busy-background.jpg"
              alt="Busy outdoor background"
              width={609}
              height={479}
              className="size-full object-cover"
            />
          </span>
        ) : (
          <>
            <HorizontalGuide top="50%" />
            <VerticalGuide left="50%" />
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 w-[287px] -translate-x-1/2 -translate-y-1/2 rotate-45 border-t-[0.5px] border-dashed border-[#ff8f99]"
            />
          </>
        )}
        <LogoAsset
          src={logo}
          alt=""
          width={width}
          height={21}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            transform ?? ""
          }`}
        />
      </div>
      <p className="flex h-[34px] items-center px-3 py-2 text-xs leading-[18px] font-medium text-text-primary">
        {caption}
      </p>
    </FramedCard>
  );
}

export function IncorrectUseExamples() {
  const items: readonly IncorrectUse[] = [
    {
      caption: "Don’t change the color of the logo",
      logo: "incorrect-color.svg",
    },
    {
      caption: "Don’t squash the logo",
      logo: "incorrect-squash.svg",
      width: 81,
    },
    {
      caption: "Don’t outline the logo",
      logo: "incorrect-outline.svg",
    },
    {
      caption: "Don’t fill the logo with gradients",
      logo: "incorrect-gradient.svg",
    },
    {
      caption: "Don’t place the logo over a busy background",
      logo: "full-white-small.svg",
      busy: true,
    },
    {
      caption: "Don’t skew the logo",
      logo: "incorrect-skew.svg",
      transform: "rotate-[20deg]",
    },
  ];

  return (
    <div className="grid h-[584px] w-full grid-cols-2 grid-rows-3 gap-2.5">
      {items.map((item) => (
        <IncorrectUseCard key={item.caption} {...item} />
      ))}
    </div>
  );
}
