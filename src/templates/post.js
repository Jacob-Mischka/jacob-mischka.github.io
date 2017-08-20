/* global graphql */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Flickity from '../flickity.js';

import { formatDate } from '../utils.js';

export default class Post extends Component {
	static propTypes = {
		data: PropTypes.object
	};

	constructor() {
		super();

		this.createCarousels = this.createCarousels.bind(this);
	}

	render() {
		const post = this.props.data.markdownRemark;

		return (
			<section className="post">
				<header className="post-header">
					<Link to="/blog" className="blog-link">
						← Back to blog
					</Link>
					<h1 className="post-title">
						{post.frontmatter.title}
					</h1>
			{
				post.frontmatter.date && (
					<time className="post-meta">
						{formatDate(post.frontmatter.date)}
					</time>
				)
			}
				</header>

				<article className="post-content"
					dangerouslySetInnerHTML={{__html: post.html}}></article>
			</section>
		);
	}

	componentDidMount() {
		this.createCarousels();
	}

	componentDidUpdate() {
		this.createCarousels();
	}

	createCarousels() {
		let carousels = Array.from(document.querySelectorAll('.carousel'));
		for (let carousel of carousels) {
			new Flickity(carousel, {
				cover: true
			});
		}
	}
}

export const pageQuery = graphql`
	query BlogPostByPath($slug: String!) {
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
				date
			}
		}
	}
`;
