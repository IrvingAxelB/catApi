import {
  UPDATE_IMAGE_OBJ,
  UPDATE_IS_LOADING,
  UPDATE_SNACK_BAR_MESSAGE,
  UPDATE_DISPLAY_SNACKBAR,
  UPDATE_CATAPI_REDUCER_PROPERTY,
} from '../actions/catApi';

export default function catApiReducer (state = {
  imageObj: {},
  isLoading: false,
  favourites: [],
  displaySnackBar: false,
  snackBarMessage: '',
  categories: [],
  breeds: [],
  category: 1,
  breed: '',
  mime_types: '',
}, action) {
  switch (action.type) {
    case UPDATE_CATAPI_REDUCER_PROPERTY : {
      return {
        ...state,
        [action.name]: action.newData,
      };
    }
    case UPDATE_IMAGE_OBJ : {
      return {
        ...state,
        imageObj: action.data,
      };
    }
    case UPDATE_DISPLAY_SNACKBAR : {
      return {
        ...state,
        displaySnackBar: action.displaySnackBar,
      };
    }
    case UPDATE_SNACK_BAR_MESSAGE : {
      return {
        ...state,
        snackBarMessage: action.snackBarMessage,
      };
    }
    case UPDATE_IS_LOADING : {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    default:
      return state;
  }
};
