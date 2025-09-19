import { useState } from "react";
import { Table, Button } from "reactstrap";
import type { TFunction } from "i18next";

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
  darkMode: boolean;
  t: TFunction;
}

const GradesTable = ({ data, darkMode, t }: GradesTableProps) => {
  const [expanded, setExpanded] = useState(false);

  // Média ponderada geral
  const totalWeighted = data.reduce(
    (acc, cur) => acc + cur.Nota * cur.CargaHoraria,
    0
  );
  const totalHours = data.reduce((acc, cur) => acc + cur.CargaHoraria, 0);
  const weightedAverage = totalWeighted / totalHours || 0;

  // Mostrar só 10 linhas se não estiver expandido
  const visibleData = expanded ? data : data.slice(0, 10);

  return (
    <div className="grades-table-container">
      <Table
        bordered
        striped
        hover
        responsive
        className={darkMode ? "table-light text-dark" : "table-dark text-light"}
      >
        <thead>
          <tr>
            <th>{t("college.tableHeaders.semester")}</th>
            <th>{t("college.tableHeaders.year")}</th>
            <th>{t("college.tableHeaders.course")}</th>
            <th>{t("college.tableHeaders.grade")}</th>
            <th>{t("college.tableHeaders.hours")}</th>
          </tr>
        </thead>
        <tbody>
          {visibleData.map((grade, idx) => (
            <tr key={idx}>
              <td>{grade.Semestre}</td>
              <td>{grade.Ano}</td>
              <td>{grade.Disciplina}</td>
              <td>{grade.Nota}</td>
              <td>{grade.CargaHoraria}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>{t("college.tableFooters.weightedAverage")}</td>
            <td>{weightedAverage.toFixed(2)}</td>
            <td></td>
          </tr>
        </tfoot>
      </Table>

      {/* Botão para expandir/colapsar */}
      {data.length > 10 && (
 <div className="text-center mt-2 mb-4">
  <Button
    color={darkMode ? "dark" : "light"}
    onClick={() => setExpanded(!expanded)}
  >
    {expanded ? t("college.tableHeaders.showLess") : t("college.tableHeaders.showMore")}
  </Button>
</div>
      )}
    </div>
  );
};

export default GradesTable;
