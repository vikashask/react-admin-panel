import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { AgencyToolbar, AgencyTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const AgencyList = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <AgencyToolbar />
      <div className={classes.content}>
        <AgencyTable users={users} />
      </div>
    </div>
  );
};

export default AgencyList;
