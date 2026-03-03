"use client";
import { ReactNode } from "react";
import { PanelRightOpen } from "lucide-react";

const Sidebar = ({
  children,
  isActive,
  openPanel,
}: {
  children: ReactNode;
  isActive: boolean;
  openPanel: () => void;
}) => {
  return (
    <aside
      className={`sidebar h-screen sticky top-0 border-r  border-emerald-400/20  rounded-r-2xl shadow-emerald-200 text-white py-4  px-2 [grid-area:sidebar] flex flex-col items-center gap-2 overflow-hidden ${isActive ? "active px-5" : ""}`}
    >
      <PanelRightOpen
        onClick={openPanel}
        className="cursor-pointer mb-5 self-end text-emerald-500"
      />
      <div className="flex flex-col justify-between h-full gap-4 border-t  border-emerald-400/20 w-full mb-5">
        {children}
      </div>
    </aside>
  );
};

export default Sidebar;
