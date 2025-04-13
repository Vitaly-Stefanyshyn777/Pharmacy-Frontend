import { useSelector } from 'react-redux';
import AddPharmacyPromo from '../../components/HomePage/AddPharmacyPromo/AddPharmacyPromo';
import MainBanner from '../../components/HomePage/MainBanner/MainBanner';
import MedicineStores from '../../components/HomePage/MedicineStores/MedicineStores';
import PromoBanners from '../../components/HomePage/PromoBanners/PromoBanners';
import ReviewsSection from '../../components/HomePage/ReviewsSection/ReviewsSection';
import Loader from '../../components/Loader/Loader';
import { selectIsLoading } from '../../redux/stores/selectors';
import css from './HomePage.module.css';

const HomePage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      <>
        <MainBanner />
        <PromoBanners />
        <MedicineStores />
        <AddPharmacyPromo />
        <ReviewsSection />
      </>
    </div>
  );
};

export default HomePage;
