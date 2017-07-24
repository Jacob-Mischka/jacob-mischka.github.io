import React, { Component } from 'react';
import Link from 'gatsby-link';

import { siteMetadata } from '../../gatsby-config.js';
import { COLORS } from '../constants.js';

export default class Header extends Component {
	render() {
		return (
			<header className="site-header">
				<style jsx>
				{`
					.site-header {
						min-height: 3rem;
						position: relative;
						display: flex;
						justify-content: space-between;
						margin: 0.25em 0 1em;
						background-color: ${COLORS.BACKGROUND};
					}

					.site-header :global(.site-title) {
						font-size: 1.6rem;
						line-height: 3rem;
						letter-spacing: -1px;
						margin-bottom: 0;
					}

					.site-header :global(.site-title),
					.site-header :global(.site-title:visited) {
						color: ${COLORS.DARK_GREY};
					}

					.site-nav {
						line-height: 3rem;
					}

					.site-header :global(.page-link) {
						line-height: 1.67;
						color: ${COLORS.TEXT};
					}

					.site-header :global(.page-link):not(:first-child) {
						margin-left: 1.5rem;
					}
				`}
				</style>
				<Link className="site-title" to="/">
					{siteMetadata.title}
				</Link>

				<nav className="site-nav">
					<Link className="page-link"
							to="/blog">
						Blog
					</Link>
				</nav>
			</header>
		);
	}
}
