import type { TFunction } from "i18next";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

interface CertificatesProps {
  title: string;
  t: TFunction;
  darkMode: boolean;
}

const Certificates = ({ title, t, darkMode }: CertificatesProps) => {
  const certs = [
    {
      src: "/my-portfolio/certificates/CertificadoConclusaoLinkedin.jpg",
      title: t("college.certificates.titleConclusionCertificate"),
      description: t("college.certificates.descriptionConclusionCertificate"),
    },
    {
      src: "/my-portfolio/certificates/CertificadoMeritoEstudantil.jpg",
      title: t("college.certificates.titleAcademicMeritCertificate"),
      description: t("college.certificates.descriptionAcademicMeritCertificate"),
    },
  ];

  return (
    <div className="my-5">
      <h3 className="text-center mb-4">{title}</h3>
      <Row>
        {certs.map((cert, index) => (
          <Col md="6" xs="12" key={index} className="mb-4">
            <Card className={`shadow-sm h-100 ${darkMode ? "bg-body-secondary text-dark" : "bg-dark text-light"}`}>
              <a
                href={cert.src}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  top
                  src={cert.src}
                  alt={cert.title}
                  className="img-fluid rounded"
                />
              </a>
              <CardBody>
                <CardTitle tag="h5" className="text-center fw-bold mb-3">
                  {cert.title}
                </CardTitle>
                <CardText style={{ fontSize: "0.9rem", textAlign: "justify" }}>
                  {cert.description}
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Certificates;
