import React,{  ReactNode} from "react";

interface Props {
  children: ReactNode;
  gridEl: string;
  title?: string
}

const DashboardCard = ({children, gridEl, title}: Props) => {
  return (
    <div className={`flex flex-col [grid-area:${gridEl}]  w-full  p-4 border border-slate-400/30 rounded-xl h-full min-h-50 shadow shadow-emerald-100/20 text-stone-200 bg-slate-700 dark:bg-slate-900  gap-1`}>
      <h2 className="text-2xl font-extrabold mb-3">{title}</h2>
      {children}
    </div>
  );
};

export default DashboardCard;
