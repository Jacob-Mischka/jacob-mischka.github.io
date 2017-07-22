import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Post extends Component {
	static propTypes = {
		data: PropTypes.object
	};

	render() {
		const post = this.props.data.markdownRemark;

		return (
			<section className="post">
				<header className="post-header">
					<h1 className="post-title">
						{post.frontmatter.title}
					</h1>
					<time className="post-meta">
						{post.frontmatter.date}
					</time>
				</header>

				<article className="post-content"
					dangerouslySetInnerHTML={{ __html: post.html }}></article>
			</section>
		);
	}
}

export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		site {
			siteMetadata {
				title
				author
			}
		}
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			id
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
			}
		}
	}
`;
