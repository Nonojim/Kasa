import React from 'react';
import FicheLogement from '../../components/FicheLogement/FicheLogement';
import {useParams} from 'react-router';
import {Loader} from '../../utils/style/Atoms';
import {useFetch} from '../../hooks/useFetch';
import LogementList from '../../logements.json';

const Logements = () => {
  /*const {data, isLoading, error} = useFetch('/data/logements.json'); //remplacer par adresse API
  const LogementList = data;*/
  const params = useParams();
  const id = params.id;
  const logement = LogementList.find(logement => logement.id === id);

  return <FicheLogement {...logement} />;
};

export default Logements;
