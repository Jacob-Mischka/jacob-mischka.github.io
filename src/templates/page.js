import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout.js';

export default function Post({ data: { markdownRemark: page } }) {
	return (
		<Layout>
			<section className="page">
				<header className="page-header">
					<h1 className="page-title">
						{page.frontmatter.title}
					</h1>
				</header>

				<article className="page-content"
					dangerouslySetInnerHTML={{__html: page.html}}></article>
			</section>
		</Layout>
	);
}

export const pageQuery = graphql`
	query PageByPath($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			html
			frontmatter {
				title
			}
		}
	}
`;
