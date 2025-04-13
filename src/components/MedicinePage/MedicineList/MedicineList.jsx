import css from './MedicineList.module.css';
import MedicineItem from '../MedicineItem/MedicineItem';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../redux/products/selectors.js';

const MedicineList = () => {
  const products = useSelector(selectProducts);

  return (
    <>
      <ul className={css.productList}>
        {products.length === 0 && (
          <p className={css.noProducts}>No products found:(</p>
        )}
        {products.map(product => (
          <li key={product.id} className={css.productItem}>
            <MedicineItem product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MedicineList;
