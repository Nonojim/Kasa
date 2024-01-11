import '../utils/style/Card.scss';
import {Link} from 'react-router-dom';

function Card({title, cover, description, id}) {
  return (
    <div className="gallery_card">
      <Link to={`/Logements/${id}`}>
        <img loading="lazy" src={cover} alt={description} />
        <h2>{title}</h2>
      </Link>
    </div>
  );
}
export default Card;
