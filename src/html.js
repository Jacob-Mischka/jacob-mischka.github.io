import React from "react";
import PropTypes from "prop-types";

export default class HTML extends React.Component {
	static propTypes = {
		body: PropTypes.string,
		headComponents: PropTypes.node,
		postBodyComponents: PropTypes.node
	}

	render() {
		return (
			<html lang="en">
				<head>
					<meta charSet="utf-8"/>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
					<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
					{this.props.headComponents}
				</head>
				<body>
					<main className="page-content">
						<div id="___gatsby" className="wrapper"
							dangerouslySetInnerHTML={{
								__html: this.props.body
							}}></div>
					</main>
					{this.props.postBodyComponents}
				</body>
			</html>
		);
	}
}
