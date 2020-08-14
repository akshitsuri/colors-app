import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { makeStyles } from '@material-ui/core/styles';
import ColorBoxStyles from './styles/ColorBoxStyles';
import './ColorBox.css';

const useStyles = makeStyles(ColorBoxStyles);

const ColorBox = (props) => {
  // const classes = useStyles();
  const [state, setState] = useState({
    copied: false,
  });
  // For Overlay
  const changeCopyState = () => {
    setState({ ...state, copied: true });
    setTimeout(() => setState({ ...state, copied: false }), 2000);
  };

  const { background, name } = props;
  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background: background }} className='ColorBox'>
        <div
          style={{ background: background }}
          className={`copy-overlay ${state.copied ? 'show' : ''}`}
        />
        <div className={` copy-msg ${state.copied ? 'show' : ''}`}>
          <h1>Copied!</h1>
          <p>{background}</p>
        </div>
        <div className='copy-container'>
          <div className='box-content'>
            <span>{name}</span>
          </div>
          <button className='copy-button'>Copy</button>
        </div>
        <span className='see-more'>More</span>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
