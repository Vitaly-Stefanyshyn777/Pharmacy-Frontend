import css from './StoreItem.module.css';
import Icon from '../../../shared/Icon/Icon';
import clsx from 'clsx';
import ReactEllipsisText from 'react-ellipsis-text';
import { useNavigate } from 'react-router-dom';

const StoreItem = ({ store, isMedicineStorePage }) => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate('/medicine');
  };

  return (
    <>
      <ReactEllipsisText
        className={css.storeName}
        text={store.name}
        length={15}
      />
      <div className={css.addressWrapper}>
        <Icon iconId="icon-map-pin" className={css.iconInfo} />
        <p className={css.storeInfo}>{store.address}</p>
      </div>
      <div className={css.phoneWrapper}>
        <Icon iconId="icon-phone" className={css.iconInfo} />
        <p className={css.storeInfo}>{store.phone}</p>
      </div>
      <div
        className={
          isMedicineStorePage ? css.medicineInfoWrapper : css.infoWrapper
        }
      >
        {isMedicineStorePage && (
          <button type="button" className={css.button} onClick={handleBtnClick}>
            Visit Store
          </button>
        )}

        <div className={css.innerInfoWrapper}>
          <div className={css.ratingWrapper}>
            <Icon iconId="icon-star" className={css.iconStar} />
            <span className={css.rating}>{store.rating}</span>
          </div>
          <div className={clsx(css.openFlag, { [css.open]: store.isOpen })}>
            {store.isOpen ? 'OPEN' : 'CLOSE'}
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreItem;
