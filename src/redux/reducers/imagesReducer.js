import { GET_IMAGES_LIST, GET_ONE_IMAGE } from '../actions/actionsTypes'
const imagesListReducer = (state = [], action) => {
  switch (action.type) {
    case GET_IMAGES_LIST:
      return {
        ...state,
        imagesList: action.payload
      };
    case GET_ONE_IMAGE:
      return {
        ...state,
        image: state.imagesList.filter(item => item.id === action.payload)
      };
    default:
      return state;
  }
};

export default imagesListReducer;