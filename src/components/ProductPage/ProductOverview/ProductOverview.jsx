import css from './ProductOverview.module.css';
import Icon from '../../../shared/Icon/Icon';
import { useModal } from '../../../context';
import { useState } from 'react';
import LoginModal from '../../../components/MedicinePage/LoginModal/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import { fetchCart, updateCart } from '../../../redux/cart/operations';

const ProductOverview = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const { openModal } = useModal();

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      return openModal(<LoginModal />);
    }

    fetchData();
  };

  const fetchData = async () => {
    await dispatch(
      updateCart({ productId: product._id, quantity: quantity })
    ).unwrap();
    await dispatch(fetchCart()).unwrap();
  };

  const handleAdd = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleRemove = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className={css.wrapper}>
      <div className={css.imgWrapper}>
        <img src={product.photo} alt={product.name} className={css.image} />
      </div>
      <div className={css.descriptionWrapper}>
        <div className={css.textWrapper}>
          <p className={css.title}>{product.name}</p>
          <p className={css.supplier}>{product.suppliers}</p>
        </div>
        <p className={css.price}>₴{product.price}</p>
        <div className={css.btnWrapper}>
          <div className={css.buttonAddRemoveWrapper}>
            <button
              type="button"
              className={css.buttonAddRemove}
              onClick={handleAdd}
            >
              <Icon iconId="icon-plus" className={css.icon} />
            </button>
            <p className={css.quantity}>{quantity}</p>
            <button
              type="button"
              className={css.buttonAddRemove}
              onClick={handleRemove}
            >
              <Icon iconId="icon-minus" className={css.icon} />
            </button>
          </div>
          <button
            type="button"
            className={css.buttonAddToCart}
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
