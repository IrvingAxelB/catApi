import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TableContainer = ({ dataToDisplay }) => {
  if (dataToDisplay === undefined || dataToDisplay.length === 0) {
    return null;
  }

  const data = dataToDisplay[0];
  return (
    <Paper>
      <Table>
        <TableBody>
          {Object.keys(data).map((item, key) => {
            return (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {item}
                </TableCell>
                <TableCell align="right">{data[item]}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

TableContainer.propTypes = {
  dataToDisplay: PropTypes.array,
};

export default TableContainer;
