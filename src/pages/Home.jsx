import '../utils/style/Home.scss';
import ImgBanniere from '../assets/ImageBanniere.jpg';

function Home() {
  return (
    <div className="Banner">
      <h1 className="TitleBanner">Chez vous, partout et ailleurs</h1>
      <img className="ImgBanner" src={ImgBanniere} />
    </div>
  );
}

export default Home;
