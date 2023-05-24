import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FetchMovie from 'Servises/servises';
import { Loader } from '../../components/Loader/loader';
import css from './home.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const Foo = async () => {
      try {
        const response = await FetchMovie(`trending/movie/day`, '');
        setMovies(response.results);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    };
    Foo();
  }, []);

  return (
    <div className={css.trendingList}>
      <h2> Trending today</h2>
      {error && <p>something went wrong...</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.moviesList}>
          {movies.map(({ id, title }) => (
            <li>
              <Link
                className={css.list}
                key={id}
                to={`movies/${id}`}
                state={{ from: location }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


