import type { Employee } from "./employee.type";


export type AbsenceEmployee  = Pick<Employee, 'name' | 'id'> & {
  date: string;
  reason: string;
  status: "PENDING" | "APROVED" | "REJECT";
};
