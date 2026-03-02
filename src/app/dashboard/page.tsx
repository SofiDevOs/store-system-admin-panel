import React from "react";
import { BasicStats } from "./components/sections/BasicStats";
import AbsenseTable from "./components/sections/AbsenseTable";
import employee from "./dummyData/employee.json";
import type { AbsenceEmployee } from "@/types/absenceEmployee.type";
const page = () => {
  return (
    <>
      <BasicStats />
      <AbsenseTable absenceData={employee as AbsenceEmployee[]} />
    </>
  );
};

export default page;
