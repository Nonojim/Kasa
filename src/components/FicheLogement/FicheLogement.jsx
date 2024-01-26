import './FicheLogement.scss';
import ImageSlider from '../ImageSlider/ImageSlider';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

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
      <div className="host">
        {host.name} <img className="host-picture" src={host.picture} />
      </div>
      <div className="tags-ratings">
        <div className="tags">
          {tags.map((tag, index) => (
            <span className="tag" key={index}>
              {tag}
            </span>
          ))}
        </div>
        <div className="rating">
          <span>{rating}⭐</span>
        </div>
      </div>
      <DropdownMenu title={'Description'} content={description} />
      <DropdownMenu title={'Équipements'} content={equipments} />
    </div>
  );
};

export default FicheLogement;
