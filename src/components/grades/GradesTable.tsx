import { Table } from "reactstrap";
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

const GradesTable = ({ data, darkMode, t }: GradesTableProps ) => {
  // Média ponderada geral
  const totalWeighted = data.reduce(
    (acc, cur) => acc + cur.Nota * cur.CargaHoraria,
    0
  );
  const totalHours = data.reduce((acc, cur) => acc + cur.CargaHoraria, 0);
  const weightedAverage = totalWeighted / totalHours || 0;

  return (
    <div className="grades-table-container">
      <Table bordered striped hover responsive color={darkMode ? "dark" : "light"} dark={darkMode}>
        <thead>
          <tr>
            <th>{t("college.tableHeaders.semester")}</th>
            <th>{t("college.tableHeaders.year")}</th>
            <th>{t("college.tableHeaders.course")}</th>
            <th>{t("college.tableHeaders.grade")}</th>
            <th>{t("college.tableHeaders.hours")}</th>
            <th>{t("college.tableHeaders.status")}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((grade, idx) => (
            <tr key={idx}>
              <td>{grade.Semestre}</td>
              <td>{grade.Ano}</td>
              <td>{grade.Disciplina}</td>
              <td>{grade.Nota}</td>
              <td>{grade.CargaHoraria}</td>
              <td>{grade.Situacao}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>{t("college.tableFooters.weightedAverage")}</td>
            <td>{weightedAverage.toFixed(2)}</td>
            <td colSpan={2}></td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default GradesTable;
