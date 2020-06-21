import React, { Component } from 'react';
import './ColorBox.css';

export default class ColorBox extends Component {
	render() {
		const { background, name } = this.props;
		return (
			<div style={{ background: background }} className='ColorBox'>
				<div>{name}</div>
				<span>More</span>
			</div>
		);
	}
}
