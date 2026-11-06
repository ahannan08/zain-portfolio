"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavLink } from "@/types/site";
import { Container } from "@/components/Container";
import { cn } from "@/lib/cn";

type Props = {
  brandName: string;
  links: NavLink[];
};

export function Nav({ brandName, links }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg">
      <Container className="relative flex h-16 items-center justify-between">
        <Link
          href="#home"
          className="font-display text-[22px] font-bold tracking-tight"
        >
          {brandName}
        </Link>
        <button
          type="button"
          className="cursor-pointer rounded-lg border border-border px-3 py-1.5 font-[inherit] text-text max-[820px]:block min-[821px]:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
        <nav
          id="site-nav"
          className={cn(
            "flex items-center gap-7 text-[15px] max-[820px]:absolute max-[820px]:top-16 max-[820px]:right-0 max-[820px]:left-0 max-[820px]:flex-col max-[820px]:items-start max-[820px]:gap-4 max-[820px]:border-b max-[820px]:border-border max-[820px]:bg-bg max-[820px]:px-6 max-[820px]:py-5 min-[821px]:flex",
            !open && "max-[820px]:hidden",
          )}
        >
          {links.map((item) =>
            item.variant === "solid" ? (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-full border border-accent bg-accent px-[18px] py-2 font-medium text-on-accent transition-colors duration-200 hover:border-text hover:bg-text"
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-muted transition-colors duration-200 hover:text-text"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </Container>
    </header>
  );
}
