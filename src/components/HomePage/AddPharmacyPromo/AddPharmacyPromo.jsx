import { useNavigate } from 'react-router-dom';
import css from './AddPharmacyPromo.module.css';
import { useMediaQuery } from '@mui/material';
import Icon from '../../../shared/Icon/Icon';

const AddPharmacyPromo = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:767px)');

  const handleBtnClick = () => {
    navigate('/medicine-store');
  };

  return (
    <div className={css.mainWrapper}>
      <div className={css.wrapper}>
        <div className={css.btnTextWrapper}>
          <div className={css.textWrapper}>
            <h2 className={css.title}>Add the medicines you need online now</h2>
            <p className={css.paragraph}>
              Enjoy the convenience of having your prescriptions filled from
              home by connecting with your community pharmacy through our online
              platform.
            </p>
          </div>
          <button type="button" className={css.button} onClick={handleBtnClick}>
            Buy medicine
          </button>
        </div>
        {isMobile ? (
          <img
            srcSet="/img/baner-mobile.webp 1x, /img/baner-mobile@1x.png 1x , /img/baner-mobile@2x.webp 2x, /img/baner-mobile@2x.png 2x"
            src="/img/baner-mobile@1x.png"
            alt="Promo"
            className={css.promoImage}
          />
        ) : (
          <img
            srcSet="/img/baner@1x.webp 1x, /img/baner@1x.png 1x, /img/baner@2x.webp 2x,  /img/baner@2x.png 2x"
            src="/img/baner@1x.png"
            alt="Promo"
            className={css.promoImage}
          />
        )}
      </div>
      <ul className={css.featuresList}>
        <li className={css.featuresItem}>
          <Icon iconId="icon-lightning" className={css.icon} />
          <p className={css.featuresParagraph}>Take user orders form online</p>
        </li>
        <li className={css.featuresItem}>
          <Icon iconId="icon-lightning" className={css.icon} />
          <p className={css.featuresParagraph}>Create your shop profile</p>
        </li>
        <li className={css.featuresItem}>
          <Icon iconId="icon-lightning" className={css.icon} />
          <p className={css.featuresParagraph}>Manage your store</p>
        </li>
        <li className={css.featuresItem}>
          <Icon iconId="icon-lightning" className={css.icon} />
          <p className={css.featuresParagraph}>Get more orders</p>
        </li>
        <li className={css.featuresItem}>
          <Icon iconId="icon-lightning" className={css.icon} />
          <p className={css.featuresParagraph}>Storage shed</p>
        </li>
      </ul>
    </div>
  );
};

export default AddPharmacyPromo;
