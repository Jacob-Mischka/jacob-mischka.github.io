import React, { Component } from 'react';

import SocialMediaItem from './SocialMediaItem.js';

import { siteMetadata } from '../../gatsby-config.js';
import { SOCIAL_MEDIA_SITES } from '../constants.js';

import { COLORS } from '../constants.js';

export default class Footer extends Component {
	render() {
		const socialMediaItems = Object.keys(siteMetadata.usernames).filter(site =>
			SOCIAL_MEDIA_SITES.has(site)
		).map(site => {
			const socialMediaSite = SOCIAL_MEDIA_SITES.get(site);
			return (
				<SocialMediaItem key={site}
					baseUrl={socialMediaSite.BASE_URL}
					username={siteMetadata.usernames[site]}
					icon={socialMediaSite.ICON} />
			);
		});

		return (
			<footer className="site-footer">
				<style jsx>
				{`
					.site-footer {
						background-color: ${COLORS.BACKGROUND};

					}

					.footer-heading {
						font-size: 1.5em;
						margin-bottom: 1rem;
					}

					.contact-list,
					.social-media-list {
						list-style: none;
						margin-left: 0;
					}
				`}
				</style>
				<h2 className="footer-heading">
					{siteMetadata.title}
				</h2>
				<div className="row">
					<div className="column">
						<ul className="contact-list">
							<li>{siteMetadata.title}</li>
							<li>
								<a href={`mailto:${siteMetadata.email}`}>
									{siteMetadata.email}
								</a>
							</li>
						</ul>
					</div>

					<div className="column">
						<ul className="social-media-list">
							{socialMediaItems}
						</ul>
					</div>
				</div>
			</footer>
		);
	}
}
