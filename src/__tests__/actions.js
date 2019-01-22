import * as catAPIActions from '../actions/catApi';

describe('Actions', () => {
  it('should create an action to updateCatAPIProperty', () => {
    const name = 'breed';
    const newData = 'cat';
    const expectedAction = {
      type: catAPIActions.UPDATE_CATAPI_REDUCER_PROPERTY,
      name,
      newData,
    };
    expect(catAPIActions.updateCatAPIProperty(name, newData)).toEqual(expectedAction);
  })
});
