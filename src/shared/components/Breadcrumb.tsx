"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

function Breadcrumb() {
  const pathname = usePathname();

  return (
    <h1 className="font-bold flex items-center gap-1 text-sm">
      {pathname
        .split("/")
        .filter(Boolean)
        .map((segment, index, arr) => {
          const href = "/" + arr.slice(0, index + 1).join("/");
          const isLast = index === arr.length - 1;
          return (
            <span key={href} className="flex items-center gap-1">
              <ChevronRight className="w-4 h-4 text-foreground/40" />
              {isLast ? (
                <span className="text-foreground/60">{segment}</span>
              ) : (
                <Link
                  href={href}
                  className="hover:underline hover:text-blue-400 transition-colors"
                >
                  {segment}
                </Link>
              )}
            </span>
          );
        })}
    </h1>
  );
}

export default Breadcrumb;
