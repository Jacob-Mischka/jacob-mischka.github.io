/* global graphql */
import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout.js';

import { formatDate } from '../utils.js';

export default function Blog({ data: { allMarkdownRemark: { edges } } }) {
	const posts = edges.filter(edge =>
		edge.node.frontmatter.type === 'post'
	);

	const postListItems = posts.map(post => (
		<li key={post.node.fields.slug}>
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
		<Layout>
			<h1 className="page-heading">
				Blog
			</h1>
			<ul className="post-list">
				{postListItems}
			</ul>
		</Layout>
	);
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
