import React, { PropsWithChildren } from "react";

import Link from "next/link";
interface Props {
  name: string;
  href: string;
  isActive: boolean;
  pathname: string;
  className: string;
}

const MenuItem = ({
  name,
  href,
  isActive,
  pathname,
  className,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Link href={href} className={className}>
      <li
        className={`flex items-center  justify-center gap-1   ${pathname === href ? "text-slate-500 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-500 border-slate-500 dark:border-slate-500" : "text-foreground/80 dark:text-foreground/80"}`}
      >
        {children}
        <span
          className={`ml-2 transition-discrete transition-all linear duration-300 ${isActive ? "block w-full" : "hidden w-0"}`}
        >
          {name}
        </span>
      </li>
    </Link>
  );
};

export default MenuItem;
