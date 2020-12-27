import {
  GET_IMAGES_LIST,
  GET_ONE_IMAGE,
  LOAD_SUCCESS,
  LOAD_STARTED,
  LOAD_ERROR
} from './actionsTypes'

export const actionImagesList = () => {
  return async dispatch => {
    dispatch(addImagesStarted)

    let link = "https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0 "

    try {
      let response = await fetch(link)
      let data = await response.json()
      dispatch(actionCreatorImagesList(data))
      dispatch(addImagesSuccess())
    } catch (error) {
      dispatch(addImagesError)
      console.log("error======", error)
    }

  }
}

const addImagesStarted = () => ({
  type: LOAD_STARTED
});

const addImagesSuccess = () => ({
  type: LOAD_SUCCESS,
});

const addImagesError = (error) => ({
  type: LOAD_ERROR,
  payload: error
});

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