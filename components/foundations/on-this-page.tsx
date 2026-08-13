"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type OnThisPageItem = {
  label: string;
  href: `#${string}`;
  nested?: boolean;
};

type OnThisPageProps = {
  items: readonly OnThisPageItem[];
};

type AnchorSelection = {
  targetScrollTop: number;
  arrived: boolean;
};

function sectionId(href: string) {
  return href.slice(1);
}

export function OnThisPage({ items }: OnThisPageProps) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "");
  const anchorSelectionRef = useRef<AnchorSelection | null>(null);

  useEffect(() => {
    const scrollContainer = document.querySelector<HTMLElement>("main");

    if (!scrollContainer || items.length === 0) {
      return;
    }

    const sections = items.map((item) => ({
      href: item.href,
      element: document.getElementById(sectionId(item.href)),
    }));

    const updateActiveSection = () => {
      const anchorSelection = anchorSelectionRef.current;

      if (anchorSelection) {
        const isAtAnchor =
          Math.abs(scrollContainer.scrollTop - anchorSelection.targetScrollTop) <=
          1;

        if (!anchorSelection.arrived) {
          anchorSelection.arrived = isAtAnchor;
          return;
        }

        if (isAtAnchor) {
          return;
        }

        anchorSelectionRef.current = null;
      }

      const maxScrollTop =
        scrollContainer.scrollHeight - scrollContainer.clientHeight;

      if (maxScrollTop - scrollContainer.scrollTop <= 1) {
        setActiveHref(items[items.length - 1].href);
        return;
      }

      const activationLine =
        scrollContainer.getBoundingClientRect().top +
        scrollContainer.clientHeight / 3;
      let currentHref = items[0].href;

      for (const section of sections) {
        if (!section.element) {
          continue;
        }

        if (section.element.getBoundingClientRect().top <= activationLine) {
          currentHref = section.href;
        } else {
          break;
        }
      }

      setActiveHref(currentHref);
    };

    updateActiveSection();
    scrollContainer.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    return () => {
      scrollContainer.removeEventListener("scroll", updateActiveSection);
    };
  }, [items]);

  const selectAnchor = (href: OnThisPageItem["href"]) => {
    const scrollContainer = document.querySelector<HTMLElement>("main");
    const target = document.getElementById(sectionId(href));

    if (scrollContainer && target) {
      const scrollOffset = Number.parseFloat(
        getComputedStyle(scrollContainer).scrollPaddingTop,
      );
      const targetScrollTop = Math.min(
        scrollContainer.scrollHeight - scrollContainer.clientHeight,
        Math.max(
          0,
          scrollContainer.scrollTop +
            target.getBoundingClientRect().top -
            scrollContainer.getBoundingClientRect().top -
            scrollOffset,
        ),
      );

      anchorSelectionRef.current = {
        targetScrollTop,
        arrived: Math.abs(scrollContainer.scrollTop - targetScrollTop) <= 1,
      };
    }

    setActiveHref(href);
  };

  return (
    <div className="flex h-full w-full flex-col gap-0.5 py-[54px]">
      <div className="flex h-8 w-full shrink-0 items-center gap-0.5 py-1.5">
        <Image
          src="/assets/icons/navigation/on-this-page.svg"
          alt=""
          width={14}
          height={14}
          unoptimized
        />
        <p className="min-w-0 flex-1 text-sm leading-5 font-normal tracking-[0] text-text-tertiary">
          On this page
        </p>
      </div>

      <nav aria-label="On this page" className="relative flex w-full flex-col">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-px bg-border-default"
        />
        {items.map((item) => {
          const active = activeHref === item.href;

          return (
            <a
              key={item.href}
              href={item.href}
              className={`relative flex min-h-8 w-full shrink-0 items-center py-1.5 text-sm leading-5 font-normal tracking-[0] hover:text-text-primary ${
                item.nested ? "px-6" : "px-4"
              } ${active ? "text-text-primary" : "text-text-secondary"}`}
              onClick={() => selectAnchor(item.href)}
            >
              {active ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 w-px bg-border-focus"
                />
              ) : null}
              {item.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
