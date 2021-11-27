import Card from '../Card';
import s from './Cast.module.scss';
import { useState, useEffect, useCallback } from 'react';
import { fetchCastInfo } from '../../js/api/movies-api';
import CharacterCardList from './../CharacterCardList';

const Cast = ({ movieId }) => {
  const [castInfo, setCastInfo] = useState(null);

  const getCastInfo = useCallback(async () => {
    const castInfo = await fetchCastInfo(movieId);
    setCastInfo(castInfo.slice(0, 5));
  }, [movieId]);

  useEffect(getCastInfo, [getCastInfo]);

  return (
    castInfo && (
      <Card>
        <CharacterCardList characters={castInfo} />
      </Card>
    )
  );
};

export default Cast;
