import s from './MovieDetailsContent.module.scss';
const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

const MovieDetailsContent = ({
  title,
  release_date,
  overview,
  vote_average,
  poster_path,
  genres,
}) => {
  const year = release_date?.split('-')[0];
  const mappedGenres = genres?.map(({ name }) => name).join(', ');

  return (
    <div className={s.cardContent}>
      <div className={s.imagePlaceholder}>
        <img src={`${POSTER_URL}/${poster_path}`} alt={title} className={s.image} />
      </div>
      <div>
        <h1>
          {title} {year && `(${year})`}
        </h1>
        <p className={s.text}>
          <span className={s.titleText}>User Score:</span> {vote_average}
        </p>
        <h2>Overview</h2>
        <p className={s.text}>{overview}</p>
        <h2>Genres</h2>
        <p className={s.text}>{mappedGenres}</p>
      </div>
    </div>
  );
};

export default MovieDetailsContent;
