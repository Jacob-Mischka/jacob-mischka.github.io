/* eslint-env node */

module.exports = {
	siteMetadata: {
		title: 'Jacob Mischka',
		author: 'Jacob Mischka',
	},
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/public`,
				name: 'files'
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/images`,
				name: 'images'
			}
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 590,
						},
					},
					{
						resolve: 'gatsby-remark-responsive-iframe',
						options: {
							wrapperStyle: 'margin-bottom: 1.0725rem',
						},
					},
					'gatsby-remark-prismjs',
					'gatsby-remark-copy-linked-files',
					'gatsby-remark-smartypants',
				],
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				//trackingId: 'ADD YOUR TRACKING ID HERE',
			},
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'create-markdown-pages',
			options: {
				pageTemplate: `${__dirname}/src/templates/page.js`,
				postTemplate: `${__dirname}/src/templates/post.js`
			}
		},
		{
			resolve: '@jacobmischka/gatsby-plugin-copy-files',
			options: {
				source: `${__dirname}/src/public`,
				destination: ''
			}
		},
		{
			resolve: '@jacobmischka/gatsby-plugin-copy-files',
			options: {
				source: `${__dirname}/src/images`,
				destination: '/images'
			}
		}
	]
};
