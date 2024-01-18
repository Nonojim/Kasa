import '../Home/Home.scss';
import ImgBanniere from '../../assets/ImageBanniere.jpg';
import Card from '../../components/Card/Card';
import LogementList from '../../data/logements.json';
import Banner from '../../components/Banner/Banner';

function Home() {
  return (
    <div className="body">
      <Banner cover={ImgBanniere} titre={'Chez vous, et partout et ailleurs'} />
      <div className="gallery">
        {LogementList.map(logement => (
          <Card key={logement.id} {...logement} />
        ))}
      </div>
    </div>
  );
}

export default Home;
