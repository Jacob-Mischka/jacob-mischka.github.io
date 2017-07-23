import React from 'react';

import githubIcon from './icons/github.svg';
import twitterIcon from './icons/twitter.svg';
import keybaseIcon from './icons/keybase2.svg';
import steamIcon from './icons/steam.svg';

export const SOCIAL_MEDIA_SITES = new Map([
	['github', {
		BASE_URL: 'https://github.com',
		ICON: githubIcon
	}],
	['twitter', {
		BASE_URL: 'https://twitter.com',
		ICON: twitterIcon
	}],
	['keybase', {
		BASE_URL: 'https://keybase.io',
		ICON: keybaseIcon
	}],
	['steam', {
		BASE_URL: 'http://steamcommunity.com/id',
		ICON: steamIcon
	}]
]);
