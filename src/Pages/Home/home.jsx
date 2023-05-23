import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FetchMovie from 'Servises/servises';
import { Loader } from '../../components/Loader/loader';
import css from './home.module.css';

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
const trendMovies = `trending/movie/day`;

    useEffect(() => {
           setIsLoading(true);
       const Foo = async () => {
         try {
           const response = await FetchMovie(trendMovies, '');
           setMovies(response.results);
           console.log(response.results)
         } catch (error) {
           setError({ error });
         } finally {
           setIsLoading(false);
         }
       };
       Foo();
     }, [trendMovies]);

   
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
                 <Link className={css.list} key={id} to={`movies/${id}`}>
                   {title}
                 </Link>
               </li>
             ))}
           </ul>
         )}
       </div>
     );
}




// 'https://api.themoviedb.org/3/movie/movie_id/reviews?
// 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1' \
// 'https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US' \
// https://api.themoviedb.org/3/search/movie
// https://api.themoviedb.org/3/movie/movie_id?