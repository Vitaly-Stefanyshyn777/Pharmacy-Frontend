import LoginForm from '../../components/LoginPage/LoginForm/LoginForm';
import RegisterLoginBanner from '../../components/RegisterPage/RegisterLoginBanner/RegisterLoginBanner';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={css.wrapper}>
      <RegisterLoginBanner />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
