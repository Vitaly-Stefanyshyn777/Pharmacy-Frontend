import { useDispatch, useSelector } from 'react-redux';
import css from './ReviewsSection.module.css';
import { useMediaQuery } from '@mui/material';
import { selectReviews } from '../../../redux/reviews/selectors';
import { useEffect } from 'react';
import { fetchReviews } from '../../../redux/reviews/operations';

const ReviewsSection = () => {
  const reviewsList = useSelector(selectReviews);
  const dispatch = useDispatch();

  const isMobile = useMediaQuery('(max-width:767px)');
  const isTablet = useMediaQuery('(min-width:768px) and (max-width:1439px)');

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  let visibleReviews;
  if (isMobile) {
    visibleReviews = reviewsList.slice(0, 1);
  } else if (isTablet) {
    visibleReviews = reviewsList.slice(0, 2);
  } else {
    visibleReviews = reviewsList.slice(0, 3);
  }

  return (
    <div className={css.wrapper}>
      <div className={css.titleWrapper}>
        <h3 className={css.title}>Reviews</h3>
        <p className={css.paragraph}>
          Search for Medicine, Filter by your location
        </p>
      </div>
      <ul className={css.reviewsList}>
        {visibleReviews.map((review, index) => (
          <li key={index} className={css.reviewItem}>
            <img
              srcSet={`/img/${index + 1}.webp 1x, /img/${index + 1}.png 1x`}
              src={`/img/${index + 1}.png`}
              alt="reviewer"
              className={css.avatar}
            />
            <p className={css.name}>{review.name}</p>
            <p className={css.testimonial}>{review.testimonial}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsSection;
