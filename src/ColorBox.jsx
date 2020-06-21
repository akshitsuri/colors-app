import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

export default class ColorBox extends Component {
	state = {
		copied: false
	};
	// For Overlay
	changeCopyState = () => {
		this.setState({ copied: true }, () => {
			setTimeout(() => this.setState({ copied: false }), 2000);
		});
	};
	render() {
		const { background, name } = this.props;
		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div style={{ background: background }} className='ColorBox'>
					<div
						style={{ background: background }}
						className={`copy-overlay ${this.state.copied ? 'show' : ''}`}
					/>
					<div className={` copy-msg ${this.state.copied ? 'show' : ''}`}>
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
	}
}
