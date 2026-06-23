import type { Employee } from "./employee.type";

export type AbsenceEmployee = Pick<
  Employee,
  "name" | "id" | "profileImage"
> & {
  date: string;
  reason: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
};
