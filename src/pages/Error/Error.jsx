import ErrorPng from '../../assets/404.png';
import {StyledNavLink} from '../../utils/style/Atoms';
import '../Error/Error.scss';

function Error() {
  return (
    <div className="ErrorBody">
      <img src={ErrorPng} />
      <h1>Oups! La page que vous demandez n'existe pas.</h1>
      <StyledNavLink to="/">Retourner sur la page d’accueil</StyledNavLink>
    </div>
  );
}

export default Error;
