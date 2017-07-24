import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SocialMediaItem extends Component {
	static propTypes = {
		baseUrl: PropTypes.string,
		username: PropTypes.string,
		icon: PropTypes.string
	};

	render() {
		const { baseUrl, username, icon } = this.props;
		return (
			<li className="social-media-item">
				<a href={`${baseUrl}/${username}`}>
					<span className="icon">
						<img src={icon} width="24" height="24" alt="" />
					</span>
					<span className="username">
						{username}
					</span>
				</a>
			</li>
		);
	}
}
