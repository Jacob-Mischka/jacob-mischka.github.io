import React, { useEffect } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout.js';

import Flickity from '../flickity.js';
import { formatDate } from '../utils.js';

export default function Post({ data: { markdownRemark: post } }) {
	useEffect(() => {
		createCarousels();
	}, []);

	return (
		<Layout>
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
		</Layout>
	);

}

function createCarousels() {
	let carousels = Array.from(document.querySelectorAll('.carousel'));
	for (let carousel of carousels) {
		new Flickity(carousel, {
			cover: true,
			imagesLoaded: true
		});
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
