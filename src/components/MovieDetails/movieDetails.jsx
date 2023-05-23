import css from './movieDetails.module.css';
import { useState, useEffect, Suspense } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import FetchMovie from 'Servises/servises';
import { Loader } from '../Loader/loader';
import PropTypes from 'prop-types';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

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
      <Link onClick={() => navigate(-1)}>Go back</Link>
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
      <p>Additional information</p>
      <ul>
        <li key={movie.id}>
          <Link key={movie.id} to="cast" state={{ from: location }}>
            Cast
          </Link>
        </li>
        <li>
          <Link key={movie.id} to="reviews" state={{ from: location }}>
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

MovieDetails.prototype = {
  title: PropTypes.string,
  id: PropTypes.number,
  movie: PropTypes.object,
  img: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  genres: PropTypes.array,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
};
