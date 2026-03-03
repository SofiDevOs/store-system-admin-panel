import React from "react";
import { BasicStats } from "./components/sections/BasicStats";
import AbsenseTable from "./components/sections/AbsenseTable";
import employee from "./dummyData/employee.json";
import type { AbsenceEmployee } from "@/types/absenceEmployee.type";
import Link from "next/link";

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
        <td>
          <Link
            href={`/dashboard/absense/${employee.id}`}
            className="bg-slate-800 dark:bg-slate-600 hover:bg-slate-600 dark:hover:bg-slate-500 text-white px-2 py-1 rounded"
          >
            Detalles
          </Link>
        </td>
      </AbsenseTable>
    </>
  );
};

export default page;
