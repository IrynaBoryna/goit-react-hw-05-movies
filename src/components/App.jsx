import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('../Pages/Home/home'));
const  Movies = lazy(() => import( '../Pages/Movies/movies'));
const MovieDetails = lazy(() => import( './MovieDetails/movieDetails'));
const Cast = lazy(() => import( './Cast/cast'));
const Reviews = lazy(() => import( './Reviews/reviews'));
const SharedLayout = lazy(() => import( './SharedLayout/sharedLayout'));

export const App = () => {
  return (
    <div
      style={{
        width: 'auto',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        overflow: 'scroll',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
