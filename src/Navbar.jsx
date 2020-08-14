import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles, MenuItem, Snackbar, Select } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Slider from 'rc-slider';
import NavbarStyles from './styles/NavbarStyles';
import 'rc-slider/assets/index.css';

const useStyles = makeStyles(NavbarStyles);

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const Navbar = ({ value, setValue, format, setFormat }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <header className={classes.Navbar}>
      <div className={classes.logo}>
        <Link to='/'>reactcolorpicker</Link>
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
      <div className={classes.selectContainer}>
        <Select
          value={format}
          onChange={(e) => {
            setFormat(e.target.value);
            setOpen(true);
          }}
        >
          <MenuItem value='hex'>HEX</MenuItem>
          <MenuItem value='rgb'>RGB</MenuItem>
          <MenuItem value='rgba'>RGBA</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
      >
        <Alert severity='success' onClose={handleClose}>
          <span id='message-id'>{`Format changed to ${format.toUpperCase()}`}</span>
        </Alert>
      </Snackbar>
    </header>
  );
};

Navbar.propTypes = {};

export default Navbar;
