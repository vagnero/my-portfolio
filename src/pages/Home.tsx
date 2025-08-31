import { Button } from "reactstrap";
import useDocumentTitle from "../hooks/useDocumentTitle";

interface PageProps {
  pageName: string;
}
const Home: React.FC<PageProps> = ({ pageName }) => {
  useDocumentTitle(pageName, "My Portfolio");
  return (
    <div className="text-center">
      <h1>Bem-vindo ao meu Portfólio 👋</h1>
      <p>Aqui você encontra meus projetos e informações sobre mim.</p>
      <Button color="primary" href="#/projects">Ver Projetos</Button>
    </div>
  );
}

export default Home;
