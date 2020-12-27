import { LOAD_STARTED, LOAD_SUCCESS, LOAD_ERROR } from '../actions/actionsTypes'

const imagesListReducer = (state = { load: true, errors: null }, action) => {
  switch (action.type) {
    case LOAD_STARTED:
      return {
        ...state,
        load: true,
        errors: null
      };

    case LOAD_SUCCESS:
      return {
        ...state,
        load: false,
        errors: null
      };

    case LOAD_ERROR:
      return {
        ...state,
        load: false,
        errors: action.payload
      };

    default:
      return state;
  }
};

export default imagesListReducer;