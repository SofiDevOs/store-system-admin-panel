"use client";
import { Home, TableProperties } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar";
import "./styles/dashboard.css";

const navMenu = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <Home />,
  },
  {
    name: "Empleados",
    href: "/dashboard/employees",
    icon: <TableProperties />,
  },
];

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
            <ul className="flex flex-col gap-2 w-full"  >
              {
                navMenu.map((item, index) => (
                <li className="flex items-center gap-2" key={index}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 ${pathname === item.href ? "text-emerald-500" : "text-white/80"}`}
                  >
                    {item.icon}
                    <span className={`ml-2 transition-discrete transition-all linear duration-300 ${isActive ? "block w-full" : "hidden w-0"}`}>{item.name}</span>
                  </Link>
                </li>
                ))
              }
            </ul>
          </nav>
        </Sidebar>
        <div className="flex flex-col w-full p-5  [grid-area:main] ">
          {children}
        </div>
      </section>
    </main>
  );
};

export default DashboardLayout;
