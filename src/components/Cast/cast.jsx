import css from './cast.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FetchMovie from 'Servises/servises';
import { Loader } from '../Loader/loader';
import PropTypes from 'prop-types';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const Foo = async () => {
      try {
        const response = await FetchMovie(`movie/${movieId}/credits`, ``);
        setCasts(response.cast);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    };
    Foo();
  }, [movieId]);

  return (
    <>
      {casts.length === 0 && <p>We don't have casts for this movie</p>}
      {error && <p>something went wrong...</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.castsList}>
          {casts.map(({ id, character, original_name, profile_path }) => (
            <li key={id}>
              <p>Character: {character}</p>
              <p>{original_name}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt=""
                className={css.img}
              />
              {}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Cast;

Cast.prototype = {
  character: PropTypes.string,
  original_name: PropTypes.string,
  id: PropTypes.number,
  profile_path: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  castsr: PropTypes.array,
};