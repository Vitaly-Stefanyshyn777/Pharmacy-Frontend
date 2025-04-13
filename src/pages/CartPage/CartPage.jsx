import { useSelector } from 'react-redux';
import CartOverview from '../../components/CartPage/CartOverview/CartOverview';
import OrderPlacement from '../../components/CartPage/OrderPlacement/OrderPlacement';
import css from './CartPage.module.css';
import { selectCart, selectIsLoading } from '../../redux/cart/selectors';
import Loader from '../../components/Loader/Loader';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const cart = useSelector(selectCart) || [];
  const navigate = useNavigate();

  const handleStoreClick = () => {
    navigate('/medicine');
  };

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      {!isLoading && cart.length === 0 && (
        <div className={css.emptyCart}>
          <p className={css.emptyCartText}>Your cart is empty</p>
          <button
            type="button"
            className={css.btnEmptyCart}
            onClick={handleStoreClick}
          >
            To store
          </button>
        </div>
      )}
      {!isLoading && cart.length > 0 && (
        <>
          <OrderPlacement />
          <CartOverview cart={cart} />
        </>
      )}
    </div>
  );
};

export default CartPage;
