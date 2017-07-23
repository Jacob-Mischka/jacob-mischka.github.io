import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

export default class Header extends Component {
	static propTypes = {
		data: PropTypes.object.isRequired
	}

	render() {
		return (
			<header className="site-header">
				<div className="wrapper">
					<Link className="site-title" to="/">
						Jacob Mischka
					</Link>
				</div>
			</header>
		);
	}
}

// export const pageQuery = graphql`
// 	query HeaderQuery {
// 		site {
// 			siteMetadata {
// 				title
// 			}
// 		}
// 	}
// `;
