import { faCloudDownloadAlt, faComments, faEye, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getImage } from '../../redux/store';
import './ImageDetails.scss'

const ImageDetails = () => {
  const { imageId } = useParams();
  const image = useSelector(getImage(+imageId));

  if(!image) {
    return <div>Loading...</div>
  }

  return (
    <div className="imageDetails">
      <div className="backLink">
        <Link to='/' className='link'>
          ᐸ Back To All images
        </Link>
      </div>
    <div className="details__card">

      <div className="cardImage">
        <img
          className="photo"
          src={image.webformatURL}
          alt={image.tags}
        />
      </div>
      <div className="description">
        <div>
          <img
            src={image.userImageURL}
            className='round-img'
            alt={image.user}
            style={{ width: '150px' }}
          />
        </div>
        <h2 className="name">{image.user}</h2>
        <h3 className="cardTags">Tags: {image.tags}</h3>
          <div className="cardInfo">
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>{image.likes}</span>
          </div>
          <div className="cardInfo">
            <FontAwesomeIcon icon={faComments} />
            <span>{image.comments}</span>
          </div>
          <div className="cardInfo">
            <FontAwesomeIcon icon={faEye} />
            <span>{image.views}</span>
          </div>
          <div className="cardInfo">
            <FontAwesomeIcon icon={faCloudDownloadAlt} />
            <span>{image.downloads}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
