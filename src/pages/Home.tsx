// src/pages/Home.tsx
import useDocumentTitle from "../hooks/useDocumentTitle";
import LinkCard from "../components/home/LinkCard";
import { Container, Row, Col } from "reactstrap";
import type { TFunction } from "i18next";

interface PageProps {
  pageName: string;
  t: TFunction;
  darkMode: boolean;
}

const Home: React.FC<PageProps> = ({ pageName, darkMode, t }) => {
  useDocumentTitle(pageName, "My Portfolio");

  const links = [
    {
      to: "/resume",
      title: t("header.resume"),
      image:
        "/my-portfolio/images/cv.jpg",
    },
    {
      to: "/about",
      title: t("header.about"),
      image:
        "/my-portfolio/images/vagner3.jpeg",
    },
    {
      to: "/projects",
      title: t("header.projects"),
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=60",
    },
    {
      to: "/college",
      title: t("header.college"),
      image:
        "/my-portfolio/images/college.jpg",
    },
    
  ];

  return (
    <Container className="py-5">
      <div className="text-center mb-5">

      </div>

      <Row className="g-4">
        {links.map((link, index) => (
          <Col key={index} xs="6" sm="6" md="6" lg="6">
            <LinkCard
              to={link.to}
              title={link.title}
              image={link.image}
              darkMode={darkMode}
            />
          </Col>
        ))}
      </Row>

    </Container>
  );
};

export default Home;
