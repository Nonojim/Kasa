import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

export function StarRating({rating}) {
  const filledStars = Math.floor(rating);

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < filledStars) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="empty-star" />);
    }
  }

  return stars;
}
