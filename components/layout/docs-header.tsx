import { IconButton } from "@/components/ui/icon-button";

type DocsHeaderProps = {
  title: string;
};

export function DocsHeader({ title }: DocsHeaderProps) {
  return (
    <header className="col-start-2 row-start-1 flex h-16 items-center justify-between px-5 py-4 shadow-[inset_0_-1px_0_var(--color-border-default)]">
      <p className="text-sm leading-5 font-normal tracking-[0] text-text-primary">
        {title}
      </p>

      <IconButton label="Theme" icon="/assets/icons/utility/theme.svg" />
    </header>
  );
}
