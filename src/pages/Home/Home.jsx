import '../Home/Home.scss';
import ImgBanniere from '../../assets/ImageBanniere.jpg';
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';
import {useFetch} from '../../hooks/useFetch';
import {Loader} from '../../utils/style/Atoms';

function Home() {
  const {value, loading, error} = useFetch('/data/logements.json', {}, []); //remplacer par adresse API
  const LogementList = value;

  return !error ? (
    <div className="main">
      <Banner cover={ImgBanniere} titre={'Chez vous, et partout et ailleurs'} />
      {loading ? (
        <Loader />
      ) : (
        <div className="gallery">
          {LogementList?.map(logement => (
            <Card key={logement.id} {...logement} />
          ))}
        </div>
      )}
    </div>
  ) : (
    <span>Un problème est survenu</span>
  );
}

export default Home;
