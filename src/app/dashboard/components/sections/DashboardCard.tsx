import React, { PropsWithChildren} from "react";

interface Props {
  basis?:string;
}


const DashboardCard = ({children, basis="20%"}: PropsWithChildren<Props>) => {
  return (
    <div className={`flex flex-col w-full basis-[${basis}] p-2 border border-emerald-400/30 rounded-xl h-full min-h-50 shadow shadow-emerald-100/20`}>
      {children}
    </div>
  );
};

export default DashboardCard;
