import React from "react";
import PropTypes from "prop-types";
import stylesStr from '!raw-loader!../public/styles.css';

export default class HTML extends React.Component {
	static propTypes = {
		body: PropTypes.string,
		headComponents: PropTypes.node,
		postBodyComponents: PropTypes.node
	}

	render() {
		let css;
		if (process.env.NODE_ENV === 'production') {
			css = (
				<style id="gatsby-inlined-css"
					dangerouslySetInnerHTML={{__html: stylesStr}}></style>
			);
		}
		return (
			<html lang="en">
				<head>
					<meta charSet="utf-8"/>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
					<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
					{this.props.headComponents}
					{css}
				</head>
				<body>
					<div id="___gatsby" className="wrapper"
						dangerouslySetInnerHTML={{
							__html: this.props.body
						}}></div>
					{this.props.postBodyComponents}
				</body>
			</html>
		);
	}
}
