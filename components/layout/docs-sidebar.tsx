"use client";

import { useState } from "react";
import { NavigationItem } from "@/components/layout/navigation-item";

const foundationItems = [
  { label: "Color", href: "/foundations/color" },
  { label: "Typography", href: "/foundations/typography" },
  { label: "Spacing", href: "/foundations/spacing" },
  { label: "Radius", href: "/foundations/radius" },
  { label: "Elevation", href: "/foundations/elevation" },
  { label: "Logo", href: "/foundations/logo" },
  { label: "Imagery", href: "/foundations/imagery" },
] as const;

type DocsSidebarProps = {
  activePath?: "/" | "/getting-started";
};

export function DocsSidebar({ activePath = "/" }: DocsSidebarProps) {
  const [foundationsExpanded, setFoundationsExpanded] = useState(true);
  const homeActive = activePath === "/";
  const gettingStartedActive = activePath === "/getting-started";

  return (
    <aside className="col-start-1 row-start-2 p-5 shadow-[inset_-1px_0_0_var(--color-border-default)]">
      <nav aria-label="Documentation" className="flex flex-col gap-0.5">
        <NavigationItem
          label="Home"
          href="/"
          icon={
            homeActive
              ? "/assets/icons/navigation/home.svg"
              : "/assets/icons/navigation/home-inactive.svg"
          }
          active={homeActive}
        />
        <NavigationItem
          label="Getting Started"
          href="/getting-started"
          icon={
            gettingStartedActive
              ? "/assets/icons/navigation/getting-started-active.svg"
              : "/assets/icons/navigation/getting-started.svg"
          }
          active={gettingStartedActive}
        />

        <div className="flex flex-col gap-0.5">
          <NavigationItem
            label="Fondations"
            icon="/assets/icons/navigation/fondations.svg"
            trailingIcon="/assets/icons/navigation/chevron.svg"
            expanded={foundationsExpanded}
            controls="foundations-navigation"
            onClick={() => setFoundationsExpanded((expanded) => !expanded)}
          />
          {foundationsExpanded ? (
            <div id="foundations-navigation" className="contents">
              {foundationItems.map((item) => (
                <NavigationItem key={item.href} {...item} nested />
              ))}
            </div>
          ) : null}
        </div>

        <NavigationItem
          label="Changelog"
          icon="/assets/icons/navigation/changelog.svg"
        />
      </nav>
    </aside>
  );
}
