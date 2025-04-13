import { useDispatch, useSelector } from 'react-redux';
import ProductOverview from '../../components/ProductPage/ProductOverview/ProductOverview';
import TabsContainer from '../../components/ProductPage/TabsContainer/TabsContainer';
import css from './ProductPage.module.css';
import { useParams } from 'react-router-dom';
import { selectSelectedProduct } from '../../redux/products/selectors';
import { fetchProductsById } from '../../redux/products/operations';
import { useEffect } from 'react';
import { selectIsLoading } from '../../redux/products/selectors';
import Loader from '../../components/Loader/Loader';

const ProductPage = () => {
  const { productId } = useParams();
  const product = useSelector(selectSelectedProduct);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductsById(productId));
    }
  }, [dispatch, productId]);

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      {!isLoading && !product && <p>Product not found or failed to load</p>}
      {!isLoading && product && (
        <>
          <ProductOverview product={product} />
          <TabsContainer product={product} />
        </>
      )}
    </div>
  );
};

export default ProductPage;
