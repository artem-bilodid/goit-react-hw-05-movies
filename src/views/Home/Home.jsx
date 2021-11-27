import s from './Home.module.scss';
import { fetchTrendingMovies } from '../../js/api/movies-api';
import Container from './../../components/Container';
import Card from '../../components/Card';
import MoviesList from './../../components/MoviesList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = props => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(data => {
      setMovies(data);
    });
  }, []);

  return (
    <main>
      <Container>
        <h1>Trending Today</h1>
        <Card>{movies.length > 0 && <MoviesList movies={movies} location={location} />}</Card>
      </Container>
    </main>
  );
};

export default Home;
