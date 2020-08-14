import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteStyles from './styles/PaletteStyles';
import './Palette.css';

const useStyles = makeStyles(PaletteStyles);
const Palette = ({ pallete }) => {
  const classes = useStyles();
  const [value, setValue] = useState(500);
  const { colors, id, emoji, paletteName } = pallete;
  const allColorBoxes = colors[value].map((c, i) => {
    return <ColorBox key={i} background={c.hex} name={c.name} />;
  });

  return (
    <div className={classes.Palette}>
      <Navbar value={value} setValue={setValue} />
      <div className={classes.colors}>
        {/* all color boxes */}
        {allColorBoxes}
      </div>
      {/* footer */}
    </div>
  );
};

export default Palette;
