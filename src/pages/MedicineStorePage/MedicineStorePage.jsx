import css from './MedicineStorePage.module.css';
import MedicineStores from '../../components/HomePage/MedicineStores/MedicineStores';
import { selectIsLoading } from '../../redux/stores/selectors';
import Loader from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';

const MedicineStorePage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      <MedicineStores />
    </div>
  );
};

export default MedicineStorePage;
