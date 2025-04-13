import css from './OrderPlacement.module.css';
import CartForm from '../CartForm/CartForm';

const OrderPlacement = () => {
  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Cart</h3>
      <CartForm />
    </div>
  );
};

export default OrderPlacement;
