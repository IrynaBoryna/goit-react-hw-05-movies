import css from './searchbar.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Seachbar = ({onSubmit}) => {
  const [query, setQuery] = useState('');

  const handleInputChange = evt => {
    setQuery(evt.currentTarget.value.toLowerCase());
  };

  const handleInputSubmit = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      return alert('Enter your request');
    }
    onSubmit(query);
    setQuery('');
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

Seachbar.prototype = {
    query: PropTypes.string,
  };