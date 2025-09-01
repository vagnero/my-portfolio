import { useEffect, useState } from "react";
import GradesTable from "../components/grades/GradesTable";
import GradesChart from "../components/grades/GradesChart";
import CollegeHeader from "../components/grades/CollegeHeader";
import useDocumentTitle from "../hooks/useDocumentTitle";

interface Grade {
  Semestre: number;
  Ano: number;
  Disciplina: string;
  Nota: number;
  CargaHoraria: number;
  Situacao: string;
}

interface PageProps {
  pageName: string;
}

const College = ({ pageName }: PageProps) => {
  useDocumentTitle(pageName, "Default");
  const [gradesData, setGradesData] = useState<Grade[]>([]);

  // Carrega o JSON do public
  useEffect(() => {
    fetch("/my-portfolio/data/grades.json")
      .then((res) => res.json())
      .then((data) => setGradesData(data));
  }, []);

  const images = [
    "/my-portfolio/grades/Historic-1.jpg",
    "/my-portfolio/grades/Historic-2.jpg",
    "/my-portfolio/grades/Historic-3.jpg",
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Cabeçalho com título e imagens */}
      <CollegeHeader images={images} title={pageName} />

      {/* Tabela de notas */}
      <GradesTable data={gradesData} />

      {/* Gráfico */}
      <GradesChart
        data={gradesData}
      />
    </div>
  );
}

export default College;
