import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';

const LinearProgressContainer = ({ isLoading }) =>
  isLoading ? <LinearProgress color="secondary" /> : null;

function mapStateToProps(state) {
  return {
    isLoading: state.catApiReducer.isLoading
  };
}

LinearProgressContainer.propTypes = {
  isLoading: PropTypes.bool,
};

export default connect(mapStateToProps)(LinearProgressContainer);
