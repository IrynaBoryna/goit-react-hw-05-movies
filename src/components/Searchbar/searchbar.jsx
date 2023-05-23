import css from './searchbar.module.css';
import { useState } from 'react';

const Seachbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = evt => {
    setQuery(evt.currentTarget.value.toLowerCase());
  };

  const handleInputSubmit = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      return alert('Enter your request');
    }
    setQuery('');
    onSubmit(query);
  };

  return (
    <form className={css.SearchForm} onSubmit={handleInputSubmit}>
      <input
        className={css.SearchFormInput}
        type="text"
        placeholder=""
        name="query"
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit" className={css.SearchButton}>
        <span className={css.SearchButtonText}> Search</span>
      </button>
    </form>
  );
};

export default Seachbar;
