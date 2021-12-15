const ActionTypes = {
  SET_IMAGES: 'SET_IMAGES',
  CHANGE_IMAGE_TAGS: 'CHANGE_IMAGE_TAGS',
};

export const setImages = (images) => {
  return {
    type: ActionTypes.SET_IMAGES,
    payload: images,
  }
}

export const changeImagesTags = (id, tags) => {
  return {
    type: ActionTypes.CHANGE_IMAGE_TAGS,
    payload: { id, tags }
  }
}

const defaultState = {
  images: [],
}

export const imagesReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_IMAGES:
      return {
        ...state,
        images: payload.hits
      }

    case ActionTypes.CHANGE_IMAGE_TAGS:
      return {
        ...state,
        images: state.images.map(image => {
          if (image.id !== payload.id) {
            return image
          }

          return {
            ...image,
            tags: payload.tags,
          }
        })
      }
  
    default:
      return state;
  }
}
