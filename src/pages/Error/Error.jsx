import ErrorPng from '../../assets/404.png';
import {StyledNavLink} from '../../utils/style/Atoms';
import '../Error/Error.scss';
import ImageSlider from '../../components/ImageSlider/ImageSlider';

function Error() {
  return (
    <div className="ErrorMain">
      <ImageSlider />
      <img src={ErrorPng} />
      <h1>Oups! La page que vous demandez n'existe pas.</h1>
      <StyledNavLink to="/">Retourner sur la page d’accueil</StyledNavLink>
    </div>
  );
}

export default Error;
