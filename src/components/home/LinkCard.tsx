// src/components/LinkCard.tsx
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

interface LinkCardProps {
  to: string;
  title: string;
  image: string;
  darkMode: boolean;
}

const LinkCard: React.FC<LinkCardProps> = ({ to, title, image, darkMode }) => {
  return (
    <Card
      className={`border-0 shadow-sm overflow-hidden animate-in ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      style={{
        borderRadius: "16px",
        transition: "transform 0.3s",
      }}
    >
      <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "60%", // proporção da imagem 5:3
            overflow: "hidden",
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
            className="link-card-img"
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              padding: "0.8rem",
              background: darkMode
                ? "rgba(0,0,0,0.6)"
                : "rgba(255,255,255,0.7)",
              backdropFilter: "blur(6px)",
            }}
          >
            <h4 className="m-0">{title}</h4>
          </div>
        </div>
      </Link>
      <CardBody></CardBody>
    </Card>
  );
};

export default LinkCard;
