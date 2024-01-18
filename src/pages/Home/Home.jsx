import '../Home/Home.scss';
import ImgBanniere from '../../assets/ImageBanniere.jpg';
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';
import {useFetch} from '../../hooks/useFetch';
import {Loader} from '../../utils/style/Atoms';

function Home() {
  const {data, isLoading, error} = useFetch('/data/logements.json'); //remplacer par adresse API
  console.log(Array.isArray(data));
  const LogementList = data;
  console.log(Array.isArray(LogementList));
  if (error) {
    return <span>Un problème est survenu</span>;
  }

  return (
    <div className="main">
      <Banner cover={ImgBanniere} titre={'Chez vous, et partout et ailleurs'} />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="gallery">
          {LogementList?.map(logement => (
            <Card key={logement.id} {...logement} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
