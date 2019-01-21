import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCatAPI, updateCatAPIProperty } from '../actions/catApi';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const MIME_TYPES = [
  {
    id: 1,
    name: 'gif',
  },
  {
    id: 2,
    name: 'jpg',
  },
  {
    id: 3,
    name: 'png',
  },
];

class CatOptions extends React.Component {
  componentDidMount() {
    this.getBreeds();
    this.getCategories();
  };
  getBreeds = () => {
    const { dispatch } = this.props;
    dispatch(getCatAPI({
      type: 'breeds',
      query_params: {
        limit: 20,
        page: 1,
        attach_breed: 3,
      }
    }));
  };
  getCategories = () => {
    const { dispatch } = this.props;
    dispatch(getCatAPI({
      type: 'categories',
      query_params: {},
    }));
  };
  handleChange = name => event => {
    const { dispatch } = this.props;
    dispatch(updateCatAPIProperty(name, event.target.value));
  };
  render() {
    const {
      categories,
      breeds,
      category,
      breed,
      mime_types,
    } = this.props;

    return (
      <div style={{ display: 'block' }}>
        <TextField
          style={{ margin: 10 }}
          select
          label="Select"
          value={category}
          onChange={this.handleChange('category')}
          helperText="Category"
          margin="normal"
        >
          {categories.map(option => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          style={{ margin: 10 }}
          select
          label="Select"
          value={breed}
          onChange={this.handleChange('breed')}
          helperText="Breeds"
          margin="normal"
        >
          {breeds.map(option => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          style={{ margin: 10 }}
          select
          label="Select"
          value={mime_types}
          onChange={this.handleChange('mime_types')}
          helperText="Meme Types"
          margin="normal"
        >
          {MIME_TYPES.map(option => (
            <MenuItem key={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.catApiReducer.categories,
    breeds: state.catApiReducer.breeds,
    category: state.catApiReducer.category,
    breed: state.catApiReducer.breed,
    mime_types: state.catApiReducer.mime_types,
  };
}

CatOptions.propTypes = {
  categories: PropTypes.array,
  breeds: PropTypes.array,
  category: PropTypes.number,
  breed: PropTypes.string,
  mime_types: PropTypes.string,
  dispatch: PropTypes.func,
};


export default connect(mapStateToProps)(CatOptions);
