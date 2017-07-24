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
				<style jsx>
				{`
					.icon,
					.icon img {
						width: 1em;
						height: 1em;
					}

					.username {
						margin-left: 0.5em;
					}
				`}
				</style>
				<a href={`${baseUrl}/${username}`}>
					<span className="icon">
						<img src={icon} alt="" />
					</span>
					<span className="username">
						{username}
					</span>
				</a>
			</li>
		);
	}
}
