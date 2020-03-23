import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import GaugeChart from './GaugeChart';

const styles = theme => ({
  root: {
    margin: '0 auto',
    width: '50vw',
    [theme.breakpoints.up('sm')]: {
      width: '9rem'
    },
    [theme.breakpoints.up('md')]: {
      width: '12rem',
      padding: '0 1rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '15rem'
    }
  },
  caption: {
    paddingTop: '1rem',
    textAlign: 'center'
  }
});

function Gauge({ classes, percentage, caption }) {
  return (
    <div className={classes.root}>
      <GaugeChart percentage={percentage} />
      <div className={classes.caption}>
        <Typography variant="caption">{caption}</Typography>
      </div>
    </div>
  );
}

Gauge.propTypes = {
  percentage: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired
};

export default withStyles(styles)(Gauge);
