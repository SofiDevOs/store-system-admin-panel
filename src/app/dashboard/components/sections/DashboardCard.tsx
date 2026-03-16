import React,{  ReactNode} from "react";
import { cn } from "@/lib/utils"


interface Props {
  children: ReactNode;
  className: string;
  title?: string
}

const DashboardCard = ({children, className, title}: Props) => {
  return (
    <div className={cn('flex flex-col w-full   p-2 border border-slate-400/30 rounded-xl h-full min-h-50 shadow shadow-emerald-100/20 text-stone-200 bg-slate-700 dark:bg-slate-900  gap-1 ',`${className}`)}>
      <h2 className="text-2xl font-extrabold mb-3">{title}</h2>
      {children}
    </div>
  );
};

export default DashboardCard;
