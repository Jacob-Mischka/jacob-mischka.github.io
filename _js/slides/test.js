import head from 'reveal.js/lib/js/head.min.js'; // eslint-disable-line no-unused-vars
import Reveal from 'reveal.js';
import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/black.css';

import marked from 'reveal.js/plugin/markdown/marked.js';
import markdown from 'reveal.js/plugin/markdown/markdown.js';


Reveal.initialize({
	history: true,

	dependencies: [
		{ src: marked },
		{ src: markdown }
	]
});
