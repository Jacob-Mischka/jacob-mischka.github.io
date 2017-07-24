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
						background-color: ${COLORS.BACKGROUND};
						margin: 0.25em 0 1em;
					}

					.site-title {
						font-size: 1.6rem;
						line-height: 3rem;
						letter-spacing: -1px;
						margin-bottom: 0;
						float: left;
					}

					.site-title,
					.site-title:visited {
						color: ${COLORS.DARK_GREY};
					}

					.site-nav {
						float: right;
						line-height: 3rem;
					}

					.page-link {
						line-height: 1.67;
						color: ${COLORS.TEXT};
					}

					.page-link:not(:first-child) {
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
