import React, { PropsWithChildren } from "react";

import Link from "next/link";
interface Props {
    name: string;
    href:string;
    isActive: boolean;
    pathname:string;
    className:string;
}


const MenuItem = ({name,href,isActive,pathname, className, children}:PropsWithChildren<Props>) => {
  return (
      <Link  href={href} className={className} >
        <li
          className={`flex items-center  justify-center gap-1 bg-slate-900/20  ${pathname === href ? "text-emerald-500" : "text-white/80"}`}
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
