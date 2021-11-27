import s from './SearchForm.module.scss';

const SearchForm = ({ onFormSubmit }) => {
  return (
    <form className={s.searchForm} onSubmit={onFormSubmit}>
      <input className={s.input} type="text" name="searchQuery" />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
