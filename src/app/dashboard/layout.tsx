"use client";

import { useState } from "react";

import { usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar";
import "./styles/dashboard.css";
import Footer from "./components/Footer";
import { ThemeToggle } from "@/shared/components/ThemeToggle";
import { SidebarNav } from "./components/SidebarNav";
import Breadcrumb from "@/shared/components/Breadcrumb";
import UserMenu from "@/shared/components/UserMenu";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setActive] = useState(false);

  const pathname = usePathname();

  const openPanel = () => setActive((prev) => !prev);

  return (
    <div className="flex flex-col  mx-auto w-full min-h-screen h-full">
      <section className="dashboard">
        <Sidebar isActive={isActive} openPanel={openPanel}>
          <SidebarNav isActive={isActive} pathname={pathname} />
          <Footer isActive={isActive} />
        </Sidebar>
        <div className="flex flex-col w-full h-full [grid-area:main]">
          <header className="flex justify-between sticky top-0 bg-background  items-center px-4 py-2 z-100 border-b border-foreground/20 mb-4">
            <Breadcrumb />
            <div className="flex gap-4 items-center">
            <ThemeToggle />
            <UserMenu/>
            </div>
          </header>
          <main className="flex flex-col gap-4 w-full h-full px-2 md:px-4">
            {children}
          </main>
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;
