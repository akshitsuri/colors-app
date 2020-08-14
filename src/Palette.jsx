import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import PaletteStyles from './styles/PaletteStyles';
import './Palette.css';

const useStyles = makeStyles(PaletteStyles);
const Palette = ({ pallete }) => {
  const classes = useStyles();
  const [value, setValue] = useState(500);
  const [format, setFormat] = useState('hex');
  const { colors, id, emoji, paletteName } = pallete;
  const allColorBoxes = colors[value].map((c) => {
    return <ColorBox key={c.id} background={c[format]} name={c.name} />;
  });

  return (
    <div className={classes.Palette}>
      <Navbar
        value={value}
        setValue={setValue}
        format={format}
        setFormat={setFormat}
      />
      <div className={classes.colors}>
        {/* all color boxes */}
        {allColorBoxes}
      </div>
      {/* footer */}
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

export default Palette;
