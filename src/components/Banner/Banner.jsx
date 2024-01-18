import './Banner.scss';

function Banner({cover, titre}) {
  return (
    <div className="Banner">
      <img className="ImgBanner" src={cover} />
      {titre ? <h1 className="TitleBanner">{titre}</h1> : <p className="TitleBanner"></p>}
    </div>
  );
}

export default Banner;
