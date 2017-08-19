import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import 'flickity/css/flickity.css';
import '../css/styles.css';
import 'typeface-lato';
import 'typeface-open-sans';
import 'typeface-source-serif-pro';

export default class Template extends Component {
	static propTypes = {
		children: PropTypes.func
	};

	render() {
		const children = this.props.children;

		return (
			<main className="page-content">
				<Header />
				{children()}
				<Footer />
			</main>
		);
	}
}
