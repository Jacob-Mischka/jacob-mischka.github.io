import React from 'react';
import Link from 'gatsby-link';

export default () => (
	<div>
		<h1>Hello</h1>
		<p>
			Welcome to my personal website.
			This is currently pretty bare, but I hope to add to it soon.
			Whenever I have something to say I consider noteworthy that
			doesn't fit in a tweet I may write about it here.
		</p>
		<p>
			<Link to="/about">More about me</Link>
		</p>
	</div>
);
