import { Container } from "reactstrap";

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer
      className={`text-center py-3 mt-auto`}
      style={{ backgroundColor: darkMode ? "#343a40" : "#f8f9fa", color: darkMode ? "white" : "black" }}
    >
      <Container>
        <p>© {new Date().getFullYear()} - Meu Portfólio | Desenvolvido em React</p>
      </Container>
    </footer>
  );
}
