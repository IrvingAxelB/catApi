import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

const CatModal = ({ item }) => {
  return (
    <Paper>
      <img alt="Cool Cat" src={item.image.url} style={{ height: 300, width: 300 }}/>
      <p>{`created_at: ${item.created_at}`}</p>
      <p>{`id: ${item.id}`}</p>
      <p>{`image_id: ${item.image_id}`}</p>
      <p>{`sub_id: ${item.sub_id}`}</p>
      <p>{`user_id: ${item.user_id}`}</p>
    </Paper>
  );
};

CatModal.propTypes = {
  item: PropTypes.object,
};

export default CatModal;
