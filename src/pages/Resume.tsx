import type { TFunction } from "i18next";
import useDocumentTitle from "../hooks/useDocumentTitle";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

interface PageProps {
  pageName: string;
  t: TFunction;
  darkMode: boolean;
}

const Resume: React.FC<PageProps> = ({ pageName, darkMode, t }) => {
  useDocumentTitle(pageName, "Default");

  // Obtem arrays do JSON de tradução
  const experienceList = t("resume.experience_list", { returnObjects: true }) as {
    role: string;
    company: string;
    period: string;
    description: string[];
  }[];

  const educationList = t("resume.education_list", { returnObjects: true }) as string[];
console.log("experienceList:", experienceList);

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md="8">
          <Card
            className={`shadow-lg border-0 ${
              darkMode ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            <CardBody>
              {/* Título */}
              <CardTitle tag="h2" className="mb-4 text-center">
                {t("resume.title")}
              </CardTitle>

              {/* Resumo */}
              <CardText className="mb-4">{t("resume.summary")}</CardText>

              {/* Experiência Profissional */}
              <CardTitle tag="h3" className="mt-4">
                {t("resume.experience")}
              </CardTitle>
              {experienceList.map((exp, index) => (
                <div key={index} className="mb-4">
                  <h5 className="mb-1">
                    {exp.role} — {exp.company}
                  </h5>
                  <p className="text-muted mb-2">{exp.period}</p>
                  <ul>
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Formação */}
              <CardTitle tag="h3" className="mt-4">
                {t("resume.education")}
              </CardTitle>
              <ul>
                {educationList.map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>

              {/* Botão de Download */}
              <div className="text-center mt-4">
                <Button
                  color={darkMode ? "light" : "dark"}
                  outline
                  href={t("resume.downloadLink")}
                  target="_blank"
                  download
                >
                  📄 {t("resume.download")}
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
