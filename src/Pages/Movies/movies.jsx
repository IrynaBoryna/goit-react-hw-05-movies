import css from './movies.module.css';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Loader } from '../../components/Loader/loader';
import FetchMovie from 'Servises/servises';
import Searchbar from 'components/Searchbar/searchbar';
import PropTypes from 'prop-types';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const  location  = useLocation();
  const [searchParams, setSearchParams] = useSearchParams('');

  const searchQuery = searchParams.get('query') ?? '';
  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    const Foo = async () => {
      setIsLoading(true);
      try {
        const response = await FetchMovie(`search/movie`, searchQuery);
        setMoviesSearch(response.results);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    };
    Foo();
  }, [searchQuery]);

  const updateQuery = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    setQuery(Object.values(nextParams));
  };

  return (
    <>
      <Searchbar value={query} onSubmit={updateQuery} />
      {error && <p>something went wrong...</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.moviesList}>
          {moviesSearch.map(({ id, title }) => (
            <li key={id}>
              <Link
                className={css.list}
                to={`${id}`}
                state={{ from: location }}
              >
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

Movies.prototype = {
  title: PropTypes.string,
  id: PropTypes.number,
  moviesSearch: PropTypes.array,
  query: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};
