import React, { Component } from 'react';
import Link from 'gatsby-link';

import { siteMetadata } from '../../gatsby-config.js';

export default class Header extends Component {
	render() {
		return (
			<header className="site-header">
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
