import React from "react";
import MenuItem from "./MenuItem";
import { navMenu } from "../dummyData/navMenu";
interface Props {
  isActive: boolean;
  pathname: string;
}

export const SidebarNav = ({ isActive, pathname }: Props) => {
  return (
    <nav
      className={`mt-5 flex flex-col gap-1 transition-discrete transition-all duration-500 ease-in-out ${isActive ? "items-start" : "items-center"}`}
    >
      <ul className="flex flex-col gap-2 w-full">
        {navMenu.map((item) => {
          const panelIsActive = isActive
            ? "px-4 justify-start"
            : "justify-center px-1";
          const isActivePage = pathname === item.href && " bg-slate-500/30";
          return (
            <MenuItem
              className={`flex items-center gap-2  py-2  rounded-xl border   border-slate-500/50 ${panelIsActive}  ${isActivePage}`}
              key={item.name}
              {...item}
              pathname={pathname}
              isActive={isActive}
            >
              {item.icon}
            </MenuItem>
          );
        })}
      </ul>
    </nav>
  );
};
