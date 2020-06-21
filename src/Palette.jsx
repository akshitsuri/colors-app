import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

export default class Palette extends Component {
	render() {
		const { colors, id, emoji, paletteName } = this.props;
		const allColorBoxes = colors.map((c, i) => {
			return <ColorBox key={i} background={c.color} name={c.name} />;
		});
		return (
			<div className='Palette'>
				{/* Navbar */}
				<div className='Palette-colors'>
					{/* all color boxes */}
					{allColorBoxes}
				</div>
				{/* footer */}
			</div>
		);
	}
}
