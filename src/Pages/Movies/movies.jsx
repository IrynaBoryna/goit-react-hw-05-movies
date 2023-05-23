import css from './movies.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from '../../components/Loader/loader';
import FetchMovie from 'Servises/servises';
import Searchbar from 'components/Searchbar/searchbar';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    if (query === '') {
      return;
    }
    const Foo = async () => {
      setIsLoading(true);
      try {
        const response = await FetchMovie(`search/movie`, `${query}`);
        setMoviesSearch(response.results);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    };
    Foo();
  }, [query]);

  return (
    <>
      <Searchbar onSubmit={query => setQuery(query)} />
      {error && <p>something went wrong...</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.moviesList}>
          {moviesSearch.map(({ id, title }) => (
            <li key={id}>
              <Link className={css.list} key={id} to={`${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Movies;
