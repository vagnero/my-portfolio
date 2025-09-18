import { useEffect, useState } from "react";
import Certificates from "../components/grades/Certificates";
import GradesTable from "../components/grades/GradesTable";
import GradesChart from "../components/grades/GradesChart";
import CollegeCarousel from "../components/grades/CollegeCarousel";
import useDocumentTitle from "../hooks/useDocumentTitle";
import type { i18n, TFunction } from "i18next";


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
  darkMode: boolean;
  t: TFunction;
  i18n: i18n;
}

const College = ({ pageName, darkMode, t }: PageProps) => {
  useDocumentTitle(pageName, "Default");
  const [gradesData, setGradesData] = useState<Grade[]>([]);

  // Carrega o JSON do public
  useEffect(() => {
    // fetch("/my-portfolio/data/grades.json")
    //   .then((res) => res.json())
    //   .then((data) => setGradesData(data));
    const data = t("grades", { returnObjects: true }) as Grade[];
    setGradesData(data);
  }, []);

  const images = [
    "/my-portfolio/grades/Historic-1.jpg",
    "/my-portfolio/grades/Historic-2.jpg",
    "/my-portfolio/grades/Historic-3.jpg",
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Título principal da página */}
      <h1 className="fw-bold mb-5 text-center">{pageName}</h1>

      <Certificates title={t("college.certificates.title")} t={t} darkMode={darkMode} />

      {/* Cabeçalho com título e imagens */}
      <CollegeCarousel images={images} title={t("college.tableHeaders.title")} darkMode={darkMode} />

      {/* Tabela de notas */}
      <GradesTable data={gradesData} darkMode={darkMode} t={t} />

      {/* Certificados */}

      {/* Gráfico */}
      <GradesChart
        data={gradesData} t={t}
      />
    </div>
  );
}

export default College;
