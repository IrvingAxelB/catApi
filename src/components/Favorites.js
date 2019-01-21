import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCatAPI, updateIsLoading } from '../actions/catApi';
import CatModal from '../components/CatModal';

class Favorites extends React.Component {
  componentDidMount() {
    this.getFavorites();
  };
  getFavorites = () => {
    const { dispatch } = this.props;
    dispatch(getCatAPI({
      type: 'favourites',
      query_params: {
        limit: 100,
      }
    }, () => {
      dispatch(updateIsLoading(false));
    }));
  };
  render() {
    const { favourites, isLoading } = this.props;

    if (isLoading) return <div>Loading...</div>;
    if (favourites.length === 0) return <div>You have 0 favorites</div>;

    return (
      <div>
        {favourites.map((item) => <CatModal item={item} key={item.id} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favourites: state.catApiReducer.favourites,
    isLoading: state.catApiReducer.isLoading,
  };
}

Favorites.propTypes = {
  dispatch: PropTypes.func,
  favourites: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default connect(mapStateToProps)(Favorites);
