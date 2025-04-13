import { NavLink, useLocation } from 'react-router-dom';
import css from './UserMenu.module.css';
import clsx from 'clsx';
import LoggedInMenu from '../LoggedInMenu/LoggedInMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';

const UserMenu = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.wrapper}>
      {isLoggedIn ? (
        <LoggedInMenu />
      ) : (
        <div className={css.btnWrapper}>
          <NavLink
            to="/register"
            className={clsx(css.btnRegister, { [css.greenColor]: !isHomePage })}
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            className={clsx(css.btnLogin, { [css.greenColor]: !isHomePage })}
          >
            Log in
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
