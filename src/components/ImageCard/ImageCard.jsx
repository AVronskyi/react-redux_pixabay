import { faComments, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';
import './ImageCard.scss'
import { Tags } from './Tags';

const ImageCard = React.memo(
  ({ image }) => {
    return (
      <div className="card">
        <div className="card__img">
          <Link to={`/image/${image.id}`}>
            <img
              className="image"
              src={image.webformatURL}
              alt={image.tags}
            />
          </Link>
        </div>
        <div className="card__content">
          <Tags
            image={image}
            key={image.id}
          />
          <div className="card__info">
            <div className="info">
              <FontAwesomeIcon icon={faThumbsUp} />
              <span>{image.likes}</span>
            </div>
            <div className="info">
              <FontAwesomeIcon icon={faComments} />
              <span>{image.comments}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
)

export default ImageCard;
