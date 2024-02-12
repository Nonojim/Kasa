import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import './StarRating.scss';

export function StarRating({rating}) {
  const filledStars = Math.round(parseInt(rating, 10));

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < filledStars) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="full-star" />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="empty-star" />);
    }
  }

  return stars;
}
