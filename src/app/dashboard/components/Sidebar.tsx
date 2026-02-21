'use client'
import { ReactNode } from 'react'
import { PanelRightOpen } from "lucide-react";



const Sidebar = ({ children, isActive, openPanel }: {children: ReactNode, isActive: boolean, openPanel: () => void}) => {

  return (
    <aside className={`sidebar h-screen bg-slate-900 text-white py-4  px-5 [grid-area:sidebar] flex flex-col items-center gap-2 overflow-hidden ${isActive ? 'active': ''}`}>
      <PanelRightOpen  onClick={openPanel} className="cursor-pointer mb-5 self-end text-emerald-500 "/>
      <div className="flex flex-col gap-2 border-t border-white/20 w-full mb-5  ">
      {children}
      </div>
    </aside>
  );
};

export default Sidebar;
