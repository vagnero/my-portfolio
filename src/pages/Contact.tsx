import useDocumentTitle from "../hooks/useDocumentTitle";

interface PageProps {
  pageName: string;
}

const Contact: React.FC<PageProps> = ({ pageName }) => {
  useDocumentTitle(pageName, "Default");

  return (
    <div>
      <h1>Contato</h1>
      <p>Email: seuemail@email.com</p>
      <p>LinkedIn: linkedin.com/in/seuusuario</p>
    </div>
  );
}
export default Contact;