import s from './CharacterCardList.module.scss';
const POSTER_URL = 'https://image.tmdb.org/t/p/w200/';

const CharacterCardList = ({ characters }) => {
  return (
    <div className={s.listContainer}>
      <ul className={s.cardList}>
        {characters.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <div className={s.card}>
              <div className={s.imageBox}>
                <img className={s.cardImage} src={`${POSTER_URL}/${profile_path}`} alt={name} />
              </div>
              <p>{name}</p>
              <p>Character: {character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterCardList;
