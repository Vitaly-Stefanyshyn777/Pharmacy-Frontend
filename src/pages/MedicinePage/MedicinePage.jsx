import { useDispatch, useSelector } from 'react-redux';
import Filters from '../../components/MedicinePage/Filters/Filters';
import MedicineList from '../../components/MedicinePage/MedicineList/MedicineList';
import css from './MedicinePage.module.css';
import {
  fetchCategories,
  fetchProducts,
} from '../../redux/products/operations';
import { useEffect } from 'react';
import {
  selectIsLoading,
  selectProductsPage,
} from '../../redux/products/selectors';
import Loader from '../../components/Loader/Loader';
import PaginationComponent from '../../components/PaginationComponent/PaginationComponent';
import { useScrollContext } from '../../context/ScrollContext';
import { useLocation } from 'react-router-dom';
import { changeProductsPage } from '../../redux/products/slice';

const MedicinePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectProductsPage);
  const { headerRef } = useScrollContext();
  const location = useLocation();

  const scrollToHeader = () => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    dispatch(changeProductsPage(1));
  }, [location.pathname]);

  useEffect(() => {
    dispatch(fetchProducts({ perPage: 12, page: currentPage }));
    dispatch(fetchCategories());
    scrollToHeader();
  }, [dispatch, currentPage]);

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Filters />
          <MedicineList />
          <PaginationComponent />
        </>
      )}
    </div>
  );
};

export default MedicinePage;
