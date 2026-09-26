interface CertificationCardProps {
  title: string;
  issuer: string;
  description: string;
  viewLabel: string;
  downloadLabel: string;
  imagePath: string;
  pdfPath: string;
}

const CertificationCard = ({
  title,
  issuer,
  description,
  viewLabel,
  downloadLabel,
  imagePath,
  pdfPath,
}: CertificationCardProps) => (
  <article className="certificate-card">
    <a href={pdfPath} target="_blank" rel="noopener noreferrer">
      <img src={imagePath} alt={`${title} - ${issuer}`} loading="lazy" />
    </a>
    <div className="certificate-card__details">
      <p className="content-panel__label">{issuer}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="certificate-card__actions">
        <a className="portfolio-button" href={pdfPath} target="_blank" rel="noopener noreferrer">
          {viewLabel}
        </a>
        <a className="portfolio-button portfolio-button--secondary" href={pdfPath} download>
          {downloadLabel}
        </a>
      </div>
    </div>
  </article>
);

export default CertificationCard;