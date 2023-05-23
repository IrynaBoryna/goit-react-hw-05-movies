import { Outlet, NavLink } from 'react-router-dom';
import css from './sharedLayout.module.css';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav>
          <NavLink className={css.navLink} to="/" end>
            Home
          </NavLink>
          <NavLink className={css.navLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
