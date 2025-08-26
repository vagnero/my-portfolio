import { Button } from "reactstrap";

export default function Home() {
  return (
    <div className="text-center">
      <h1>Bem-vindo ao meu Portfólio 👋</h1>
      <p>Aqui você encontra meus projetos e informações sobre mim.</p>
      <Button color="primary" href="#/projects">Ver Projetos</Button>
    </div>
  );
}
