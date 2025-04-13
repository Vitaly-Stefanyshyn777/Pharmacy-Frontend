import RegisterForm from '../../components/RegisterPage/RegisterForm/RegisterForm';
import RegisterLoginBanner from '../../components/RegisterPage/RegisterLoginBanner/RegisterLoginBanner';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div className={css.wrapper}>
      <RegisterLoginBanner />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
