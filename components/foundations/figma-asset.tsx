import Image from "next/image";

type FigmaAssetProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function FigmaAsset({ src, alt, width, height }: FigmaAssetProps) {
  return (
    <div
      className="relative shrink-0 overflow-visible"
      style={{ width, height }}
    >
      <Image
        src={src}
        alt={alt}
        width={width + 4}
        height={height + 4}
        className="absolute -top-0.5 -left-0.5 max-w-none"
        unoptimized
      />
    </div>
  );
}
