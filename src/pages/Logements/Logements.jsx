import React, {useEffect, useState} from 'react';
import FicheLogement from '../../components/FicheLogement/FicheLogement';
import {useParams} from 'react-router';
import {Loader} from '../../utils/style/Atoms';
import {useFetch} from '../../hooks/useFetch';

const Logements = () => {
  const {id} = useParams();
  const {value, loading, error} = useFetch('/data/logements.json', {}, []); //remplacer par adresse API
  const logementList = value;
  console.log(logementList);

  return !error ? (
    loading ? (
      <Loader />
    ) : (
      <FicheLogement {...logementList.find(logement => logement.id === id)} />
    )
  ) : (
    <span>Un problème est survenu</span>
  );
};

export default Logements;
