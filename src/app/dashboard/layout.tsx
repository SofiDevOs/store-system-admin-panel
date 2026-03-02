"use client";

import { useState } from "react";

import { usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar";
import "./styles/dashboard.css";
import {navMenu} from "./dummyData/navMenu";
import MenuItem from "./components/MenuItem";
import Footer from "./components/Footer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setActive] = useState(false);

  const pathname = usePathname();

  const openPanel = () => setActive((prev) => !prev);

  return (
    <main className="flex flex-col  mx-auto w-full min-h-screen">
      <section className="dashboard">
        <Sidebar isActive={isActive} openPanel={openPanel}>
          <nav
            className={`mt-5 flex flex-col gap-1 transition-discrete transition-all duration-500 ease-in-out ${isActive ? "items-start" : "items-center"}`}
          >
            <ul className="flex flex-col gap-2 w-full">
              {navMenu.map((item) => {
                const panelIsActive = isActive ? "px-4 justify-start" : 'justify-center px-1';
                const isActivePage = pathname === item.href && " bg-emerald-700/30";
                return (
                  <MenuItem
                    className={`flex items-center gap-2  py-2  rounded-xl border   border-emerald-400/50 ${panelIsActive}  ${isActivePage}` }
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
          <Footer isActive={isActive}/>
        </Sidebar>
        <div className="flex flex-col w-full p-5  [grid-area:main]">
          {children}
        </div>
      </section>
    </main>
  );
};

export default DashboardLayout;
