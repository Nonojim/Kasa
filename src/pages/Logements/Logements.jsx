import React from 'react';
import FicheLogement from '../../components/FicheLogement/FicheLogement';
import {useParams, useNavigate} from 'react-router';
import {Loader} from '../../utils/style/Atoms';
import {useFetch} from '../../hooks/useFetch';

const Logements = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {value, loading, error} = useFetch('/data/logements.json', {}, []); //remplacer par adresse API
  const logementList = value;
  console.log(logementList);

  return error ? (
    <span>Un problème est survenu</span>
  ) : loading ? (
    <Loader />
  ) : logementList.find(logement => String(logement.id) === id) ? (
    <FicheLogement {...logementList.find(logement => String(logement.id) === id)} />
  ) : (
    (() => {
      navigate('*'); // Redirection vers la page d'erreur si le logement n'est pas trouvé
    })()
  );
};

export default Logements;
