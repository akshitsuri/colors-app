import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PaletteListStyles from './styles/PaletteListStyles';

const useStyles = makeStyles(PaletteListStyles);

const PaletteList = ({ palettes }) => {
  const classes = useStyles();
  return (
    <div>
      <h1>React Colors</h1>
      {palettes.map((palette) => {
        return (
          <p key={palette.id}>
            <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          </p>
        );
      })}
    </div>
  );
};

PaletteList.propTypes = {};

export default PaletteList;
