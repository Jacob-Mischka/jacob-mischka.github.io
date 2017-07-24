/* global graphql */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Post extends Component {
	static propTypes = {
		data: PropTypes.object
	};

	render() {
		const page = this.props.data.markdownRemark;

		return (
			<section className="page">
				<header className="page-header">
					<h1 className="page-title">
						{page.frontmatter.title}
					</h1>
				</header>

				<article className="page-content"
					dangerouslySetInnerHTML={{__html: page.html}}></article>
			</section>
		);
	}
}

export const pageQuery = graphql`
	query PageByPath($slug: String!) {
		site {
			siteMetadata {
				title
				author
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			html
			fields {
				slug
			}
			frontmatter {
				title
			}
		}
	}
`;
