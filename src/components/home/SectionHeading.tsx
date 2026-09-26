interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
}

const SectionHeading = ({ eyebrow, title, description, id }: SectionHeadingProps) => (
  <header className="section-heading">
    <p className="section-heading__eyebrow">{eyebrow}</p>
    <h2 id={id}>{title}</h2>
    {description && <p>{description}</p>}
  </header>
);

export default SectionHeading;