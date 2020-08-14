import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import NavbarStyles from './styles/NavbarStyles';

const useStyles = makeStyles(NavbarStyles);

const Navbar = ({ value, setValue }) => {
  const classes = useStyles();

  return (
    <header className={classes.Navbar}>
      <div className={classes.logo}>
        <a href='!#'>reactcolorpicker</a>
      </div>
      <div className={classes.selectContainer}>
        <span>Level: {value}</span>
      </div>
      <div className={classes.slider}>
        <Slider
          defaultValue={value}
          min={100}
          step={100}
          max={900}
          onAfterChange={(newValue) => setValue(newValue)}
        />
      </div>
    </header>
  );
};

Navbar.propTypes = {};

export default Navbar;
