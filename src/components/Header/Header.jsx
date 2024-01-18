import KasaLogo from '../../assets/Logo.png';
import './Header.scss';
import {Link, NavLink} from 'react-router-dom';
import {StyledNavLink} from '../../utils/style/Atoms';

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={KasaLogo} />
      </Link>
      <nav>
        <StyledNavLink to="/">Accueil</StyledNavLink>
        <StyledNavLink to="Apropos">A Propos</StyledNavLink>
      </nav>
    </header>
  );
}

export default Header;
