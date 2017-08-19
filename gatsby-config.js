/* eslint-env node */

module.exports = {
	siteMetadata: {
		title: 'Jacob Mischka',
		author: 'Jacob Mischka',
		email: 'jacob@mischka.me',
		usernames: {
			github: 'jacobmischka',
			twitter: 'jacobmischka',
			keybase: 'jacobmischka',
			steam: 'jacobmischka'
		}
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
							maxWidth: 1600,
							linkImagesToOriginal: false
						}
					},
					{
						resolve: 'gatsby-remark-responsive-iframe',
						options: {
							wrapperStyle: 'margin-bottom: 1.0725rem',
						},
					},
					'gatsby-remark-prismjs',
					'gatsby-remark-copy-linked-files',
					'gatsby-remark-smartypants'
				],
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'UA-74510509-1',
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
