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
    <>
      <div className="SliderWrapper">
        <ImageSlider imageUrls={pictures} />
      </div>
      <div>
        <h1>{title}</h1>
        <h2>{location}</h2>
      </div>
      <div>
        {host.name} <img src={host.picture} />
      </div>
      <div>
        <div>{tags}</div>
        <div>
          <span>{rating}⭐</span>
        </div>
      </div>
      <DropdownMenu title={'Description'} content={description} />
      <DropdownMenu title={'Équipements'} content={equipments} />
    </>
  );
};

export default FicheLogement;
