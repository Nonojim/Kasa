import '../utils/style/Home.scss';
import ImgBanniere from '../assets/ImageBanniere.jpg';
import Card from '../components/Card';
import LogementList from '../data/logements.json';

function Home() {
  return (
    <div className="body">
      <div className="Banner">
        <h1 className="TitleBanner">Chez vous, partout et ailleurs</h1>
        <img className="ImgBanner" src={ImgBanniere} />
      </div>
      <div className="gallery">
        {LogementList.map(logement => (
          <Card
            key={logement.id}
            title={logement.title}
            cover={logement.cover}
            description={logement.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
