import React from "react";
import { BasicStats } from "./components/sections/BasicStats";
import AbsenseTable from "./components/sections/AbsenseTable";
import employee from "./dummyData/employee.json";
import type { AbsenceEmployee } from "@/types/absenceEmployee.type";




const page = () => {
  const columns: { field: keyof AbsenceEmployee }[] = [
    { field: "date" },
    { field: "reason" },

  ];
  const tableMenu = ["Empleado", "Fecha", "Razon", "Estatus", "Acciones"];
  return (
    <>
      <BasicStats />
      <AbsenseTable
        absenceData={employee as AbsenceEmployee[]}
        tableMenu={tableMenu}
        columns={columns}
      >
      </AbsenseTable>
    </>
  );
};

export default page;
