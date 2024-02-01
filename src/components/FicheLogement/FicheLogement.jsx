import './FicheLogement.scss';
import ImageSlider from '../ImageSlider/ImageSlider';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import {StarRating} from '../StarRating/StarRating';

const FicheLogement = ({
  title,
  location,
  pictures,
  description,
  tags,
  equipments,
  host,
  rating,
}) => {
  return (
    <div className="logementMain">
      <div className="SliderWrapper">
        <ImageSlider imageUrls={pictures} />
      </div>
      <div className="logementTitle">
        <h1>{title}</h1>
        <h2>{location}</h2>
      </div>
      <div className="tags">
        {tags.map((tag, index) => (
          <span className="tag" key={index}>
            {tag}
          </span>
        ))}
      </div>
      <div className="ratings-host">
        <div className="rating">
          <span className="stars">{StarRating(rating)}</span>
        </div>
        <div className="host">
          {host.name} <img className="host-picture" src={host.picture} />
        </div>
      </div>
      <div className="menu-Logement">
        <DropdownMenu title={'Description'} content={description} />
        <DropdownMenu title={'Équipements'} content={equipments} />
      </div>
    </div>
  );
};

export default FicheLogement;
