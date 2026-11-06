import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  children,
  variant = "ghost",
  className,
  onClick,
}: Props) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-block rounded-full border border-text px-[22px] py-3 text-[15px] font-medium transition-colors duration-200",
        variant === "solid" &&
          "border-accent bg-accent text-on-accent hover:border-text hover:bg-text",
        variant === "ghost" && "hover:bg-text hover:text-bg",
        className,
      )}
    >
      {children}
    </Link>
  );
}
