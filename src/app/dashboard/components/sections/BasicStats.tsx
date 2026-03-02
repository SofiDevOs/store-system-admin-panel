import React from "react";
import DashboardCard from "./DashboardCard";

export const BasicStats = () => {
  return (
    <>
      <section className="flex w-full px-4 h-1/4 gap-5">
        {/*  Empleados activos  */}
        <DashboardCard>
          <h2>patata</h2>
        </DashboardCard>
        <DashboardCard basis="30%">
          <h2>Nomina</h2>
        </DashboardCard>
        <DashboardCard basis="50%">
          <h2>Nomina</h2>
        </DashboardCard>
      </section>
    </>
  );
};
