import clsx from 'clsx';
import Logo from '../Logo/Logo';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import UserMenu from '../UserMenu/UserMenu';
import css from './AppBar.module.css';
import { useLocation } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useScrollContext } from '../../../context/ScrollContext';

const AppBar = () => {
  const location = useLocation();
  const { headerRef } = useScrollContext();

  const isHomePage = location.pathname === '/home';
  const isAuthorizationPage =
    location.pathname === '/login' || location.pathname === '/register';

  return (
    <header
      ref={headerRef}
      className={clsx(css.header, { [css.greenBackground]: isHomePage })}
    >
      <div className={css.wrapper}>
        <Logo />
        {!isAuthorizationPage && (
          <>
            <NavigationMenu />
            <UserMenu />
          </>
        )}
      </div>
      <MobileMenu />
    </header>
  );
};

export default AppBar;
