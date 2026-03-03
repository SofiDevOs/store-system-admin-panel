import type { Employee } from "./employee.type";

export type AbsenceEmployee = Pick<
  Employee,
  "name" | "id" | "profilePicture"
> & {
  date: string;
  reason: string;
  status: "PENDING" | "APROVED" | "REJECT";
};
