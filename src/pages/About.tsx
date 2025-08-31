import useDocumentTitle from "../hooks/useDocumentTitle";

interface PageProps {
pageName: string;
}

const About: React.FC<PageProps> = ({ pageName }) => {
  useDocumentTitle(pageName, "Default");
  return (
    <div>
      <h1>Sobre mim</h1>
      <p>Sou desenvolvedor apaixonado por tecnologia e inovação.</p>
    </div>
  );
}

export default About;
