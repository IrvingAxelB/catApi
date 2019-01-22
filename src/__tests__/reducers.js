import catApiReducer from '../reducers/catApi';
import * as catAPIActions from '../actions/catApi';

describe('catApiReducer reducer', () => {
  it('should return the initial state', () => {
    expect(catApiReducer(undefined, {})).toEqual(
      {
        imageObj: {},
        isLoading: false,
        favourites: [],
        displaySnackBar: false,
        snackBarMessage: '',
        categories: [],
        breeds: [],
        category: '',
        breed: '',
        mime_types: '',
      }
    )
  });

  it('should handle UPDATE_CATAPI_REDUCER_PROPERTY', () => {
    expect(
      catApiReducer(undefined, {
        type: catAPIActions.UPDATE_CATAPI_REDUCER_PROPERTY,
        name: 'breed',
        newData: 'cat',
      })
    ).toEqual({
      imageObj: {},
      isLoading: false,
      favourites: [],
      displaySnackBar: false,
      snackBarMessage: '',
      categories: [],
      breeds: [],
      category: '',
      breed: 'cat',
      mime_types: '',
    });
  });
});
