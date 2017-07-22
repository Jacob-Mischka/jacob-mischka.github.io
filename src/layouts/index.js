import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import '../css/styles.css';

export default class Template extends React.Component {
	static propTypes = {
		children: PropTypes.func
	};

	render() {
		return (
			<div>
				<p>
					Hm
				</p>
			</div>
		);
	}
}
