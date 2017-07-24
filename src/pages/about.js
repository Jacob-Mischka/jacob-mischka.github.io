import React, { Component } from 'react';

export default class About extends Component {
	render() {
		return (
			<div>
				<style jsx>
				{`
					.profile-photo {
						width: 300px;
						float: left;
						margin-right: 1em;
						border-radius: 50%;
					}
				`}
				</style>
				<img src="/images/me.jpg" alt="Me"
					className="profile-photo" />
				<p>
					I graduated from the University of Wisconsin-Whitewater
					with a BBA and a major in Management in Computer Systems.
				</p>
				<p>
					I am currently working as a software developer at
					the <a href="http://www.mcw.edu">
						Medical College of Wisconsin
					</a>.
				</p>
				<p>
					<a href="/resume.pdf">
						My most recent resume
					</a>
				</p>
			</div>
		);
	}
}
