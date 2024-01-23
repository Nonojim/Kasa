import {useState} from 'react';
import './ImageSlider.scss';

export default function ImageSlider({imageUrls}) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex(index => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  return (
    <div className="img-slider">
      <div className="img-slider-imgcontainer">
        {imageUrls.map(url => (
          <img
            key={url}
            src={url}
            className="img-slider-img"
            style={{translate: `${-100 * imageIndex}%`}}
          />
        ))}
      </div>
      <button onClick={showPrevImage} className="img-slider-btn" style={{left: 0}}>
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </button>
      <button onClick={showNextImage} className="img-slider-btn" style={{right: 0}}>
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </button>
      <div className="img-slider-bottombar">
        {imageUrls.map((_, index) => (
          <button
            key={index}
            className="img-slider-bottombar-btn"
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <span className="material-symbols-outlined">adjust</span>
            ) : (
              <span className="material-symbols-outlined">circle</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
