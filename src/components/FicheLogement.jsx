import DropdownMenu from './DropdownMenu';

const FicheLogement = ({title, location, cover, description, tags, equipments, host, rating}) => {
  return (
    <div>
      <img loading="lazy" src={cover} alt={description} />
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
    </div>
  );
};

export default FicheLogement;
