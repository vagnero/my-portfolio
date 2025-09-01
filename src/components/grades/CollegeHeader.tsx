
interface CollegeHeaderProps {
  images: string[];
  title: string;
}

const CollegeHeader = ({ images, title }: CollegeHeaderProps) => {
  return (
    <div className="college-header">
      <h2 className="college-title">{title}</h2>
      <div className="images-container">
        {images.map((img, idx) => (
          <a
            key={idx}
            href={img}
            target="_blank"
            rel="noopener noreferrer"
            className="image-link"
          >
            <img src={img} alt={`Histórico ${idx + 1}`} className="image-thumb" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default CollegeHeader;