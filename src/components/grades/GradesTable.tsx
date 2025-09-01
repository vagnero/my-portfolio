import { useMemo } from "react";
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

interface Grade {
  Semestre: number;
  Ano: number;
  Disciplina: string;
  Nota: number;
  CargaHoraria: number;
  Situacao: string;
}

interface GradesTableProps {
  data: Grade[];
}

const GradesTable = ({ data }: GradesTableProps) => {
  const columnHelper = createColumnHelper<Grade>();

  const columns = useMemo(
    () => [
      columnHelper.accessor("Semestre", { header: "Semestre" }),
      columnHelper.accessor("Ano", { header: "Ano" }),
      columnHelper.accessor("Disciplina", { header: "Disciplina" }),
      columnHelper.accessor("Nota", { header: "Nota" }),
      columnHelper.accessor("CargaHoraria", { header: "Carga Horária" }),
      columnHelper.accessor("Situacao", { header: "Situação" }),
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Média ponderada geral
  const totalWeighted = data.reduce(
    (acc, cur) => acc + cur.Nota * cur.CargaHoraria,
    0
  );
  const totalHours = data.reduce((acc, cur) => acc + cur.CargaHoraria, 0);
  const weightedAverage = totalWeighted / totalHours || 0;

  return (
    <div className="grades-table-container">
      <table className="grades-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Média ponderada</td>
            <td>{weightedAverage.toFixed(2)}</td>
            <td colSpan={2}></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default GradesTable;