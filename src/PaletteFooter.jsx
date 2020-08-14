import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import styles from './styles/PaletteFooterStyles';

const useStyles = makeStyles(styles);

const PaletteFooter = ({ paletteName, emoji }) => {
  const classes = useStyles();
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
};

PaletteFooter.propTypes = {};

export default PaletteFooter;
