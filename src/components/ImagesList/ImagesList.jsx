import debounce from 'lodash.debounce';
import React, { useCallback, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { getImages } from '../../redux/store';
import ImageCard from '../ImageCard/ImageCard';
import './ImagesList.scss'

const ImagesList = () => {
  const images = useSelector(getImages);
  const [query, setQuery] = useState('');
  const [queryForFiltering, setQueryForFiltering] = useState('');
  const [isReversed, setIsReversed] = useState(false);
  const [sortBy, setSortBy] = useState('default');

  const sortByLikes = () => {
    setSortBy('likes');
    setIsReversed(!isReversed);
  };

  const sortByComments = () => {
    setSortBy('comments');
    setIsReversed(!isReversed);
  };

  const filtredImages = useMemo (() => {
    return images.filter(image => 
      image.tags.includes(queryForFiltering));
  }, [images, queryForFiltering]);

  const setQueryWithDebounce = useCallback(
    debounce(setQueryForFiltering, 300),
    []
  );

  filtredImages.sort((image1, image2) => {
    switch (sortBy) {
      case 'likes':
      case 'comments':
        return image1[sortBy] - image2[sortBy];

      default:
        return 0;
    }
  })

  if (isReversed) {
    filtredImages.reverse();
  }

  return (
    <div className="imagesList">
      <header className="header">
        <form action="#" className="header__search">
          <input
            className="header__input"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setQueryWithDebounce(e.target.value);
            }}
          />
        </form>
        <div className="sortButtons">
          <button
            onClick={sortByLikes}
          >
            Sort by like
            {sortBy === 'likes' && (isReversed ? '▼' : '▲')}
          </button>

          <button
            onClick={sortByComments}
          >
            Sort by comment 
            {sortBy === 'comments' && (isReversed ? '▼' : '▲')}
          </button>
        </div>

      </header>
      <div className="cards">
        {filtredImages.map(image => 
          <ImageCard
            image={image}
            key={image.id}
          />
        )}
      </div>
    </div>
  );
};

export default ImagesList;
