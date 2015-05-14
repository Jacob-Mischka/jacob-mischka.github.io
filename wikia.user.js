// ==UserScript==
// @name          Cleaner Wikia
// @namespace     http://www.mischka.me
// @description	  Clean html
// @author        Jacob Mischka
// @homepage	  http://www.mischka.me/wikia.user.js
// @include       http://wikia.com/*
// @include       https://wikia.com/*
// @include       http://*.wikia.com/*
// @include       https://*.wikia.com/*
// @run-at        document-end
// @version       0.1
// ==/UserScript==
(function() {
	document.head.innerHTML = "";
	document.body.innerHTML = document.getElementById("WikiaArticle").innerHTML;
})();
