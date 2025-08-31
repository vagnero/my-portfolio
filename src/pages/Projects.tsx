import useDocumentTitle from "../hooks/useDocumentTitle";


interface PageProps {
pageName: string;
}

const Projects: React.FC<PageProps> = ({ pageName }) => {
  useDocumentTitle(pageName, "Default");

  return (
    <div>
      <h1>Meus Projetos</h1>
      <ul>
        <li>Projeto 1</li>
        <li>Projeto 2</li>
        <li>Projeto 3</li>
      </ul>
    </div>
  );
}

export default Projects;
