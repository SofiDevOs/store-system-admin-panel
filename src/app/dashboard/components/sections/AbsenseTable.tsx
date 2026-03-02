import { AbsenceEmployee } from "@/types/absenceEmployee.type";
import Image from "next/image";
import TagStatus from "../TagStatus";


interface Props {
  absenceData: AbsenceEmployee[];
}

const tableMenu = ["Empleado", "Fecha", "Razon", "Estatus"];

const AbsenseTable = ({ absenceData }: Props) => {

  return (
    <div className="mt-10 bg-slate-900 border border-slate-500/30  rounded-xl p-4 w-full  ">
      <table className="table-auto md:table-fixed border-collapse w-full min-h-fit ">
        <thead className="border-b border-slate-500/30">
          <tr className="py-4">
            {tableMenu.map((col) => (
              <th align="left" className="py-4" key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody className="h-full min-h-fit">
          {absenceData.map((employee) => (
            <tr key={employee.id}  className=" border-b border-slate-500/30  hover:bg-slate-800  py-10 [&>td]:min-h-16">
              <td className="p-2 flex items-center gap-3  ">
                <Image
                className="rounded-full border-2 border-white/60 "
                  width={30}
                  height={30}
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Madre Teresa"
                />{" "}
                {employee.name}
              </td>
              <td >{employee.date}</td>
              <td>{employee.reason}</td>
              <td ><TagStatus status={employee.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AbsenseTable;
