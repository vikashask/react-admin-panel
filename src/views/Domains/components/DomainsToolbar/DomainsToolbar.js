import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { SearchInput } from 'components';

const useStyles = makeStyles(theme => ({
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const DomainsToolbar = props => {
  const { ...rest } = props;
  // console.log("TCL: props", props)
  const classes = useStyles();

  const history = useHistory();
  
  const addDomain = () => {
    props.history.push('/');
    // history.push('/')
  }

  return (
    <div>
      <div className={classes.row}>
        <span className={classes.spacer} />
        {/* <Button className={classes.importButton}>Import</Button>
        <Button className={classes.exportButton}>Export</Button> */}
        <Button
          color="primary"
          onClick={addDomain}
          variant="contained"
        >
          Add Domain
        </Button>
      </div>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search user"
        />
      </div>
    </div>
  );
};

DomainsToolbar.propTypes = {
  className: PropTypes.string
};

export default DomainsToolbar;
