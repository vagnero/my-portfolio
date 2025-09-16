import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import type { TFunction } from "i18next";
interface Grade {
  Semestre: number;
  Nota: number;
  CargaHoraria: number;
}

interface GradesChartProps {
  data: Grade[];
  t: TFunction;
}

const GradesChart = ({ data, t }: GradesChartProps) => {
  // Agrupa por semestre
  const semesterData = Array.from(
    data.reduce((map, grade) => {
      if (!map.has(grade.Semestre)) map.set(grade.Semestre, { sum: 0, hours: 0 });
      const item = map.get(grade.Semestre)!;
      item.sum += grade.Nota * grade.CargaHoraria;
      item.hours += grade.CargaHoraria;
      return map;
    }, new Map<number, { sum: number; hours: number }>())
  ).map(([sem, { sum, hours }]) => ({
    Semestre: sem,
    Nota: +(sum / hours).toFixed(2),
  }));

  return (
    <div style={{ width: "100%", height: "300px", marginTop: "24px", marginBottom: "24px", border: "1px solid #ddd", borderRadius: "8px", padding: "16px", boxSizing: "border-box" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={semesterData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Semestre">
            <Label value={t("college.chart.xAxis")} offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis domain={[0, 10]}>
            <Label value={t("college.chart.yAxis")} angle={-90} position="insideLeft" style={{ textAnchor: "middle" }} />
          </YAxis>
          <Tooltip />
          <Line name={t("college.chart.line")} type="monotone" dataKey="Nota" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GradesChart;
