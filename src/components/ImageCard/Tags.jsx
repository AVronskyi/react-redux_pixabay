import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeImagesTags } from '../../redux/imagesReducers';

export const Tags = ({image}) => {
  const [newTags, setNewTags] = useState(image.tags);
  const [createTags, setCreateTags] = useState(false);
  const dispatch = useDispatch();

  return (
    <div
      onDoubleClick={(e) => setCreateTags(true)}
      style={{ cursor: 'pointer' }}
    >
      {createTags && (
        <form>
          <input
            type='text'
            value={newTags}
            onChange={(e) => {
              setNewTags(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              dispatch(changeImagesTags(image.id, newTags))
              setCreateTags(false)
            }}
          >
            Save
          </button>

          <button
            onClick={(e) => {
            setNewTags(image.tags);
            setCreateTags(false);
          }}
          >
            Cancel
          </button>
        </form>
      )}
      
      {!createTags && (
      <ul
        className="tags"
        title='double-click to edit tags'
      >
        {newTags.split(',').map(tag => 
          <li
            className="tag"
            key={tag + image.user_id}
          >
            {tag}
          </li>
        )}
      </ul>
      )}
    </div>
  )
}
