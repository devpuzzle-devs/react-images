import { GET_IMAGES_LIST, GET_ONE_IMAGE } from './actionsTypes'


export const actionCreatorImagesList = payload => {
  return {
    type: GET_IMAGES_LIST,
    payload
  };
};

export const actionCreatorImage = payload => {
  return {
    type: GET_ONE_IMAGE,
    payload
  };
};