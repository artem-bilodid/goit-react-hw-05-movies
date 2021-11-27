import s from './MovieDetails.module.scss';
import { useEffect, useCallback, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { Link, Route, Routes } from 'react-router-dom';
import { fetchMovie } from '../../js/api/movies-api';
import Card from '../../components/Card';
import Container from '../../components/Container';
import MovieDetailsContent from '../../components/MovieDetailsContent/MovieDetailsContent';
import AdditionalInformation from './../../components/AdditionalInformation';
import Cast from './../../components/Cast';
import Reviews from '../../components/Reviews';

const MovieDetails = props => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  const initMovie = useCallback(async () => {
    const movie = await fetchMovie(movieId);
    setMovie(movie);
  }, [movieId]);

  useEffect(initMovie, [initMovie]);

  return (
    <main>
      <Container>
        <Link className={s.backButton} to={location?.state?.from ?? '/movies'}>
          &lt; Back
        </Link>
        {movie && (
          <Card>
            <MovieDetailsContent {...movie} />
          </Card>
        )}
        <AdditionalInformation />
        <Routes>
          <Route path="cast" element={<Cast movieId={movieId} />} />
          <Route path="reviews" element={<Reviews movieId={movieId} />} />
        </Routes>
      </Container>
    </main>
  );
};

export default MovieDetails;
