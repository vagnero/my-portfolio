import { Container } from "reactstrap";

export default function Footer() {
  return (
      <footer className="bg-dark text-light text-center py-3 mt-4">
        <Container>
          <p>© {new Date().getFullYear()} - Meu Portfólio | Desenvolvido em React</p>
        </Container>
      </footer>
  );
}