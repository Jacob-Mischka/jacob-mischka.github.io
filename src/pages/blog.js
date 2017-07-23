import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import graphql from 'graphql';

export default class Blog extends Component {
	static propTypes = {
		data: PropTypes.object.isRequired
	};

	render() {
		const posts = this.props.data.allMarkdownRemark.edges.filter(edge =>
			edge.node.frontmatter.type === 'post'
		);
		console.log(posts);

		const postListItems = posts.map(post => (
			<li key={post.node.fields.slug}>
				<span className="post-meta">
					{post.node.frontmatter.date}
				</span>
				<h2>
					<Link to={post.node.fields.slug}
							className="post-link">
						{post.node.frontmatter.title}
					</Link>
				</h2>
			</li>
		));

		return (
			<div>
				<h1 className="page-heading">
					<ul className="post-list">
						{postListItems}
					</ul>
				</h1>
			</div>
		);
	}
}

export const pageQuery = graphql`
	query BlogIndexQuery {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						type
						title
					}
				}
			}
		}
	}
`;
