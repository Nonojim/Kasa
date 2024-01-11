import React from 'react';
import FicheLogement from '../components/FicheLogement';
import {useParams} from 'react-router';
import LogementList from '../data/logements.json';

const Logements = () => {
  const {id} = useParams();
  const logement = LogementList.find(logement => logement.id === id);

  return <FicheLogement {...logement} />;
};

export default Logements;
