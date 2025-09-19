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
  title: string;
  t: TFunction;
  darkMode: boolean;
}

const GradesChart = ({ data, title, t, darkMode }: GradesChartProps) => {
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
  <div style={{ marginTop: "100px", marginBottom: "60px" }}>
    <h2 className="component-title text-center">{title}</h2>
    <div
      style={{
        width: "100%",
        height: "300px",
        marginTop: "24px",
        marginBottom: "24px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        boxSizing: "border-box",
        ...(darkMode
          ? { backgroundColor: "#f8f9fa", color: "#000" } 
          : { backgroundColor: "#343a40", color: "#fff" }), 
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={semesterData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="Semestre"
            tick={{ fill: darkMode ? "#000" : "#fff" }}
          >
            <Label
              value={t("college.chart.xAxis")}
              offset={-5}
              position="insideBottom"
              style={{ fill: darkMode ? "#000" : "#fff" }}
            />
          </XAxis>

          <YAxis
            domain={[0, 10]}
            tick={{ fill: darkMode ? "#000" : "#fff" }}
          >
            <Label
              value={t("college.chart.yAxis")}
              angle={-90}
              position="insideLeft"
              style={{
                textAnchor: "middle",
                fill: darkMode ? "#000" : "#fff",
              }}
            />
          </YAxis>

          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? "#fff" : "#222",
              color: darkMode ? "#000" : "#fff",
              borderRadius: "6px",
            }}
          />

          <Line
            name={t("college.chart.line")}
            type="monotone"
            dataKey="Nota"
            stroke="#3b82f6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);
}

export default GradesChart;
