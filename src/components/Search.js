import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCatData, updateCatAPIProperty } from '../actions/catApi';
import Button from '@material-ui/core/Button';
import TableContainer from './TableContainer';
import CatOptions from './CatOptions';

import {
  postCatAPI,
  updateIsLoading,
  updateDisplaySnackBar,
  updateSnackBarMessage,
} from '../actions/catApi'

const SUB_ID = 'ven7qc';

export class Search extends React.Component {
  componentDidMount() {
    this.getCatInfo()
  };
  getCatInfo = () => {
    const {
      dispatch,
      category,
      breed,
      mime_types,
    } = this.props;

    dispatch(getCatData({
      type: 'imageObj',
      query_params: {
        'category_ids': category,
        'breed_ids': breed,
        mime_types,
      },
    }));
  };
  favouriteCat = () => {
    const { dispatch, imageObj } = this.props;

    dispatch(postCatAPI({
      type: 'favourites',
      data: {
        image_id: imageObj.id,
        sub_id: SUB_ID,
      },
    }, (message) => {
      dispatch(updateIsLoading(false));
      dispatch(updateDisplaySnackBar(true));
      dispatch(updateSnackBarMessage(message));
    }));
  };
  resetAndGetCat = () => {
    const { dispatch } = this.props;
    dispatch(updateCatAPIProperty('category', 0));
    dispatch(updateCatAPIProperty('breed', ''));
    dispatch(updateCatAPIProperty('mime_types', ''));

    dispatch(getCatData({
      type: 'imageObj',
      query_params: {
        'category_ids': '',
        'breed_ids': '',
        'mime_types': '',
      },
    }));
  };
  render() {
    const { imageObj, isLoading } = this.props;

    if (isLoading) return <div>Loading...</div>;
    if (imageObj === undefined || imageObj.length === 0) {
      return (
        <div>
          Nothing Found.
          <Button
            variant="contained"
            style={{ display: 'block', margin: 'auto', marginBottom: 10 }}
            onClick={this.resetAndGetCat}
          >
            Try Again
          </Button>
        </div>
      );
    }

    return (
      <div>
        <Button
          variant="contained"
          style={{ display: 'block', margin: 'auto', marginBottom: 10 }}
          onClick={this.getCatInfo}
        >
          Search Another One!
        </Button>

        <CatOptions getCatInfo={this.getCatInfo} />

        <img alt="Cool Cat" src={imageObj.url} style={{ height: 300, width: 300 }}/>
        <Button
          variant="contained"
          style={{ display: 'block', margin: 'auto', color: 'green', marginTop: 10, marginBottom: 10 }}
          onClick={this.favouriteCat}
        >
          Favorite!
        </Button>
        <TableContainer dataToDisplay={imageObj.breeds} />
        <TableContainer dataToDisplay={imageObj.categories} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    imageObj: state.catApiReducer.imageObj,
    isLoading: state.catApiReducer.isLoading,
    category: state.catApiReducer.category,
    breed: state.catApiReducer.breed,
    mime_types: state.catApiReducer.mime_types,
  };
}

Search.propTypes = {
  imageObj: PropTypes.object,
  isLoading: PropTypes.bool,
  category: PropTypes.number,
  breed: PropTypes.string,
  mime_types: PropTypes.string,
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(Search);
