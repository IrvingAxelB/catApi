import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { updateSnackBarMessage, updateDisplaySnackBar } from '../actions/catApi'

const Header = ({
  displaySnackBar,
  snackBarMessage,
  dispatch,
}) => (
  <Fragment>
    <Button variant="contained" style={style.button}>
      <Link to="/" style={style.link}>Home</Link>
    </Button>
    <Button variant="contained" style={style.button}>
      <Link to="/search" style={style.link}>Search</Link>
    </Button>
    <Button variant="contained" style={style.button}>
      <Link to="/favorites" style={style.link}>Favorites</Link>
    </Button>
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={displaySnackBar}
      onClose={() => {
        dispatch(updateDisplaySnackBar(false));
        dispatch(updateSnackBarMessage(''));
      }}
      message={<span>{snackBarMessage}</span>}
    />
  </Fragment>
);

const style = {
  button: {
    margin: 10,
  },
  link: {
    textDecoration: 'none',
  }
};

function mapStateToProps(state) {
  return {
    displaySnackBar: state.catApiReducer.displaySnackBar,
    snackBarMessage: state.catApiReducer.snackBarMessage,
  };
}

Header.propTypes = {
  displaySnackBar: PropTypes.bool,
  snackBarMessage: PropTypes.string,
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(Header);
