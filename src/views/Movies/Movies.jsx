import s from './Movies.module.scss';
import Container from './../../components/Container';
import { useState, useCallback, useEffect } from 'react';
import { searchMovies } from '../../js/api/movies-api';
import MoviesList from '../../components/MoviesList';
import Card from './../../components/Card';
import SearchForm from '../../components/SearchForm/SearchForm';
import { useSearchParams, useLocation } from 'react-router-dom';

const Movies = props => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  const updateMoviesList = useCallback(async () => {
    if (!query) return;

    const data = await searchMovies(query);
    setMovies(data);
  }, [query]);

  useEffect(updateMoviesList, [updateMoviesList]);

  const onFormSubmit = async event => {
    event.preventDefault();
    const normalizedQuery = event.target.searchQuery.value.trim();

    if (!normalizedQuery) return;

    setSearchParams({ query: normalizedQuery });
    setQuery(normalizedQuery);
  };

  return (
    <main>
      <Container>
        <h1>Search Movies</h1>
        <div className={s.searchContainer}>
          <SearchForm onFormSubmit={onFormSubmit} />
        </div>
        {movies.length > 0 && (
          <Card>
            <MoviesList movies={movies} location={location} />
          </Card>
        )}
      </Container>
    </main>
  );
};

export default Movies;
