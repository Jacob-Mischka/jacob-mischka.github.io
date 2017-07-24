/* global graphql */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { formatDate } from '../utils.js';

export default class Blog extends Component {
	static propTypes = {
		data: PropTypes.object.isRequired
	};

	render() {
		const posts = this.props.data.allMarkdownRemark.edges.filter(edge =>
			edge.node.frontmatter.type === 'post'
		);

		const postListItems = posts.map(post => (
			<li key={post.node.fields.slug}>
				<style jsx>
				{`
					h2 {
						font-size: 1.35em;
						line-height: 1;
					}

					h2 :global(.post-link) {
						display: inline-block;
					}
				`}
				</style>
				<span className="post-meta">
					{formatDate(post.node.frontmatter.date)}
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
					Blog
				</h1>
				<ul className="post-list">
					{postListItems}
				</ul>
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
						date
					}
				}
			}
		}
	}
`;
