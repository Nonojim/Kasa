import '../utils/style/Card.scss';

function Card({title, cover, description}) {
  return (
    <div className="gallery_card">
      <img loading="lazy" src={cover} alt={description} />
      <h2>{title}</h2>
    </div>
  );
}
export default Card;
