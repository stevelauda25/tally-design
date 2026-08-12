import type { ReactNode } from "react";
import { DocsBrand } from "@/components/layout/docs-brand";
import { DocsHeader } from "@/components/layout/docs-header";
import { DocsSidebar } from "@/components/layout/docs-sidebar";

type DocsShellProps = {
  children: ReactNode;
  pageTitle?: string;
  activePath?: "/" | "/getting-started";
};

export function DocsShell({
  children,
  pageTitle = "Home",
  activePath = "/",
}: DocsShellProps) {
  return (
    <div className="grid min-h-[886px] min-w-[1440px] grid-cols-[300px_minmax(1140px,1fr)] grid-rows-[64px_minmax(822px,1fr)] bg-background-primary">
      <DocsBrand />
      <DocsHeader title={pageTitle} />
      <DocsSidebar activePath={activePath} />
      <main className="col-start-2 row-start-2 overflow-hidden py-[58px]">
        <div className="mx-auto flex w-[680px] flex-col gap-7">{children}</div>
      </main>
    </div>
  );
}
