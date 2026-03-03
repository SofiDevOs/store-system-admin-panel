import { AbsenceEmployee } from "@/types/absenceEmployee.type";
import Image from "next/image";
import TagStatus from "../TagStatus";

interface Props {
  absenceData: AbsenceEmployee[];
  tableMenu: string[];
  columns: { field: keyof AbsenceEmployee }[];
  children?: React.ReactNode;
}

const AbsenseTable = ({ absenceData, tableMenu, columns, children }: Props) => {
  return (
    <div className="mt-10 bg-slate-700 dark:bg-slate-900 border border-slate-500/30  rounded-xl p-4 w-full  ">
      <table className="table-auto md:table-fixed border-collapse w-full min-h-fit ">
        <thead className="border-b border-slate-500/30">
          <tr className="py-4">
            {tableMenu.map((col) => (
              <th align="left" className="py-4 text-slate-200" key={col}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="h-full min-h-fit">
          {absenceData.map((row) => (
            <tr
              key={row.id}
              className=" border-b border-slate-500/30 dark:border-slate-500/30 hover:bg-slate-500/20 dark:hover:bg-slate-800  py-10 [&>td]:text-slate-300 dark:[&>td]:text-slate-200 [&>td]:min-h-16"
            >
              {row.profilePicture && row.name && (
                <td className="p-2 flex items-center gap-3  ">
                  <Image
                    className="rounded-full border-2 border-white/60 "
                    width={30}
                    height={30}
                    src={row.profilePicture}
                    alt={row.name}
                  />{" "}
                  {row.name}
                </td>
              )}
              {columns.map((col) => (
                <td key={col.field}>{row[col.field]}</td>
              ))}
              {row.status && (
                <td>
                  <TagStatus status={row.status} />
                </td>
              )}
              {children}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AbsenseTable;
