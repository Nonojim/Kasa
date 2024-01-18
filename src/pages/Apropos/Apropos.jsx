import Banner from '../../components/Banner/Banner';
import AproposImg from '../../assets/AproposImg.jpg';
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu';
import '../Apropos/Apropos.scss';

function Apropos() {
  return (
    <div className="main Apropos">
      <Banner cover={AproposImg} />
      <DropdownMenu
        title={'Fiabilité'}
        content={
          'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
        }
      />
      <DropdownMenu
        title={'Respect'}
        content={
          'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportment discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        }
      />
      <DropdownMenu
        title={'Service'}
        content={
          'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportment discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        }
      />
      <DropdownMenu
        title={'Sécurité'}
        content={
          "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laisant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
      />
    </div>
  );
}

export default Apropos;
