/** @format */

import React from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import 'flickity/css/flickity.css';
import '../css/styles.css';
import 'typeface-lato';
import 'typeface-open-sans';
import 'typeface-source-serif-pro';

export default function Layout({ children }) {
	return (
		<main className="page-content">
			<Header />
			{children}
			<Footer />
		</main>
	);
}
