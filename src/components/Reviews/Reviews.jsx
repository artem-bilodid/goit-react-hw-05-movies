import s from './Reviews.module.scss';
import { fetchReviews } from '../../js/api/movies-api';
import { useCallback, useState, useEffect } from 'react';
import Card from '../Card';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  const getReviews = useCallback(async () => {
    const reviews = await fetchReviews(movieId);
    setReviews(reviews.slice(0, 5));
  }, [movieId]);

  useEffect(getReviews, [getReviews]);

  return reviews.length > 0 ? (
    <Card>
      <ul className={s.list}>
        {reviews.map(({ id, author, content }) => (
          <li className={s.item} key={id}>
            <div className={s.comment}>
              <h3>{author}</h3>
              <p className={s.text}>{content}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  ) : (
    <Card>No reviews yet :'(</Card>
  );
};

export default Reviews;
