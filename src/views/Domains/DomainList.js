import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { DomainsToolbar, DomainTable, AddDomain } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const DomainList = (props) => {
  // console.log("TCL: DomainList -> props", props)
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <DomainsToolbar {...props}/>
      <div className={classes.content}>
        <DomainTable users={users} />
      </div>

      <div className={classes.content}>
        <AddDomain />
      </div>
    </div>
  );
};

export default DomainList;
