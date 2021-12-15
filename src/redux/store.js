import axios from "axios";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { imagesReducer, setImages } from "./imagesReducers";

const reducers = combineReducers({
  allImages: imagesReducer,
})
export const getImages = (state) => state.allImages.images;

export const getImage = (id) => {
  return (state) =>
    getImages(state).find(image => image.id === id);
};

export const loadImages = () => {
  return async (dispatch) => {
    const response = await axios
      .get(
        `https://pixabay.com/api/?key=24739471-dde7400cd3ecc0d52c1f047aa&q=cats&image_type=all&per_page=100`
      )
      .catch((err) => {
        console.log('Err', err);
      });

      dispatch(setImages(response.data));
  };
}

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  ),
)

export default store;
