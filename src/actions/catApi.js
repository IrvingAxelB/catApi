import axios from 'axios';

export const UPDATE_IMAGE_OBJ = 'UPDATE_IMAGE_OBJ';
export const UPDATE_IS_LOADING = 'UPDATE_IS_LOADING';
export const UPDATE_DISPLAY_SNACKBAR = 'UPDATE_DISPLAY_SNACKBAR';
export const UPDATE_SNACK_BAR_MESSAGE = 'UPDATE_SNACK_BAR_MESSAGE';
export const UPDATE_CATAPI_REDUCER_PROPERTY = 'UPDATE_CATAPI_REDUCER_PROPERTY';

const KEY = '1ee92f2a-f28e-41a4-82a9-d84940251c96';

export const updateCatAPIProperty = (name, newData) => {
  return {
    type: UPDATE_CATAPI_REDUCER_PROPERTY,
    name,
    newData,
  };
};

export const updateImageObj = (data) => {
  return {
    type: UPDATE_IMAGE_OBJ,
    data,
  };
};

export const updateSnackBarMessage = (snackBarMessage) => {
  return {
    type: UPDATE_SNACK_BAR_MESSAGE,
    snackBarMessage,
  };
};

export const updateDisplaySnackBar = (displaySnackBar) => {
  return {
    type: UPDATE_DISPLAY_SNACKBAR,
    displaySnackBar,
  };
};

export const updateIsLoading = (isLoading) => {
  return {
    type: UPDATE_IS_LOADING,
    isLoading,
  };
};

export const getCatData = (api) => {
  return dispatch => {
    dispatch(updateIsLoading(true));
    const URL = 'https://api.thecatapi.com/v1/images/search';

    axios.defaults.headers.common['x-api-key'] = KEY;
    axios.defaults.headers.common['Content-Type'] = "application/json";
    axios.get(URL, { params: api.query_params } )
      .then(({data}) => {
        dispatch(updateIsLoading(false));
        dispatch(updateImageObj(data[0]))
      }).catch((err) => {
      dispatch(updateIsLoading(false));
      console.log('error', err);
    })
  };
};

export const postCatAPI = (api, cb = ()=>{}) => {
  return () => {
    let URL = 'https://api.thecatapi.com/v1';
    axios.defaults.headers.common['x-api-key'] = KEY;
    axios.defaults.headers.common['Content-Type'] = "application/json";
    axios.post(`${URL}/${api.type}`, api.data)
      .then(({data}) => {
        cb(data.message);
      }).catch((err) => {
      cb(err.message);
      console.log('error', err);
    })
  };
};

export const getCatAPI = (api, cb = ()=>{}) => {
  return dispatch => {
    let URL = 'https://api.thecatapi.com/v1';

    axios.defaults.headers.common['x-api-key'] = KEY;
    axios.defaults.headers.common['Content-Type'] = "application/json";
    axios.get(`${URL}/${api.type}`, { params: api.query_params } )
      .then(({data}) => {
        cb();
        dispatch(updateCatAPIProperty(api.type, data));
      }).catch((err) => {
        cb();
        console.log('error', err);
      })
  };
};
