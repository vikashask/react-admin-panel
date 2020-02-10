import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  TextField,
  Typography,
  Card,
  CardContent
} from '@material-ui/core';

const schema = {
  domainName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  repositoryName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  productionURL: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 64
    }
  },
  stagingURL: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  },
  re: {
    presence: { allowEmpty: false, message: 'is required' },
    checked: true
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: theme.palette.background.default,
    height: '100%'
  },
  grid: {
    height: '100%'
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  quote: {
    backgroundColor: theme.palette.neutral,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/auth.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px'
  },
  quoteText: {
    color: theme.palette.white,
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white
  },
  bio: {
    color: theme.palette.white
  },
  contentContainer: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  policy: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  },
  policyCheckbox: {
    marginLeft: '-14px'
  },
  signUpButton: {
    margin: theme.spacing(2, 0)
  }
}));

const AddDomain = props => {
  const { history } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSignUp = event => {
    event.preventDefault();
    history.push('/');
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <Card>
      <CardContent className={classes.content}>
        <div className={classes.root}>
          <Grid
            className={classes.grid}
            container
          >
            <Grid
              className={classes.content}
              item
              lg={7}
              xs={12}
            >
              <div className={classes.content}>
                <div className={classes.contentBody}>
                  <form
                    className={classes.form}
                    onSubmit={handleSignUp}
                  >
                    <Typography
                      className={classes.title}
                      variant="h2"
                    >
                      Create Domain
                   </Typography>
                    <TextField
                      className={classes.textField}
                      error={hasError('domainName')}
                      fullWidth
                      helperText={
                        hasError('domainName') ? formState.errors.domainName[0] : null
                      }
                      label="Domain name"
                      name="domainName"
                      onChange={handleChange}
                      type="text"
                      value={formState.values.domainName || ''}
                      variant="outlined"
                    />
                    <TextField
                      className={classes.textField}
                      error={hasError('repositoryName')}
                      fullWidth
                      helperText={
                        hasError('repositoryName') ? formState.errors.repositoryName[0] : null
                      }
                      label="Repository name"
                      name="repositoryName"
                      onChange={handleChange}
                      type="text"
                      value={formState.values.repositoryName || ''}
                      variant="outlined"
                    />
                    <TextField
                      className={classes.textField}
                      error={hasError('productionURL')}
                      fullWidth
                      helperText={
                        hasError('productionURL') ? formState.errors.productionURL[0] : null
                      }
                      label="Production URL address"
                      name="productionURL"
                      onChange={handleChange}
                      type="text"
                      value={formState.values.productionURL || ''}
                      variant="outlined"
                    />
                    <TextField
                      className={classes.textField}
                      error={hasError('stagingURL')}
                      fullWidth
                      helperText={
                        hasError('stagingURL') ? formState.errors.stagingURL[0] : null
                      }
                      label="Staging URL"
                      name="stagingURL"
                      onChange={handleChange}
                      type="text"
                      value={formState.values.stagingURL || ''}
                      variant="outlined"
                    />
                    <TextField
                      className={classes.textField}
                      error={hasError('region')}
                      fullWidth
                      helperText={
                        hasError('region') ? formState.errors.region[0] : null
                      }
                      label="Region"
                      name="region"
                      onChange={handleChange}
                      type="text"
                      value={formState.values.region || ''}
                      variant="outlined"
                    />

                    <Button
                      className={classes.signUpButton}
                      color="primary"
                      disabled={!formState.isValid}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Add Domain now
                    </Button>
                  </form>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
};

AddDomain.propTypes = {
  history: PropTypes.object
};

export default withRouter(AddDomain);
