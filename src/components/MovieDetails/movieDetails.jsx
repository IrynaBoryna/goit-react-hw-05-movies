import css from './movieDetails.module.css';
import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import FetchMovie from 'Servises/servises';
import { Loader } from '../Loader/loader';


const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backTo = location.state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);
    const Foo = async id => {
      try {
        const response = await FetchMovie(`movie/${movieId}`, ``);
        setMovie(response);
        setGenres([response.genres.map(item => item.name).join(', ')]);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    };
    Foo();
  }, [movieId]);

  let percentage = (movie.vote_average * 10).toFixed(0);

  return (
    <>
      <Link to={backTo}> Go back </Link>
      {error && <p>something went wrong...</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <div key={movie.id} className={css.movieCard}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <h2 className={css.movieTitle}>{movie.title}</h2>
            <p className={css.movieDataTitle}>User Score: {percentage}% </p>
            <p className={css.movieDataTitle}>Overview</p>
            <p className={css.movieData}>{movie.overview}</p>
            <p className={css.movieDataTitle}>Genres</p>
            <p className={css.movieDataTitle}>{genres}</p>
          </div>
        </div>
      )}
      <ul>
        <li key={movie.id}>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link key={movie.id} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
