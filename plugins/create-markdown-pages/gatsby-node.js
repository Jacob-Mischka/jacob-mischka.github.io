const each = require('lodash/each');
const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }, pluginOptions) => {
	const { createPage } = boundActionCreators;
	const {
		pageTemplate,
		postTemplate
	} = pluginOptions;

	return new Promise((resolve, reject) => {
		// const pages = [];
		resolve(
			graphql(`
			{
				allMarkdownRemark(limit: 1000) {
					edges {
						node {
							fields {
								slug
							}
							frontmatter {
								type
							}
						}
					}
				}
			}`).then(result => {
				if (result.errors) {
					console.log(result.errors);
					reject(result.errors);
				}

				// Create blog posts pages.
				each(result.data.allMarkdownRemark.edges, edge => {
					createPage({
						path: edge.node.fields.slug,
						component: edge.node.frontmatter.type === 'post'
							? postTemplate
							: pageTemplate,
						context: {
							slug: edge.node.fields.slug,
						}
					});
				});
			})
		);
	});
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
	const { createNodeField } = boundActionCreators;

	if (node.internal.type === 'File') {
		const parsedPath = path.parse(node.relativePath);
		const slug = parsedPath.name === 'index'
			? `/${parsedPath.dir}/`
			: `/${node.relativePath.replace(parsedPath.ext, '')}/`;

		createNodeField({ node, name: 'slug', value: slug });
	} else if (node.internal.type === 'MarkdownRemark') {
		const fileNode = getNode(node.parent);
		createNodeField({
			node,
			name: 'slug',
			value: fileNode.fields.slug
		});
	}
};
