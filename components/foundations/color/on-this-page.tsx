import {
  OnThisPage as FoundationOnThisPage,
  type OnThisPageItem,
} from "@/components/foundations/on-this-page";

const onThisPageItems: readonly OnThisPageItem[] = [
  { label: "Palette ramps", href: "#palette-ramps" },
  { label: "Neutral (warm)", href: "#neutral", nested: true },
  {
    label: "Orange-vivid (brand)",
    href: "#orange-vivid",
    nested: true,
  },
  { label: "Green (success)", href: "#green", nested: true },
  { label: "Amber (warning)", href: "#amber", nested: true },
  { label: "Red (error)", href: "#red", nested: true },
  { label: "Gray (cool)", href: "#gray", nested: true },
  { label: "Semantic colors", href: "#semantic-colors" },
  { label: "Source of truth", href: "#source-of-truth" },
];

export function OnThisPage() {
  return <FoundationOnThisPage items={onThisPageItems} />;
}
