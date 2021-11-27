import s from './MoviesList.module.scss';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies = [], location }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link className={s.link} to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
