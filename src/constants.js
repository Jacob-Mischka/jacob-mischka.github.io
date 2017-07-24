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

export const COLORS = {
	BRAND: '#ff8a1f',
	BACKGROUND: '#fefefe',
	TEXT: 'rgba(0, 0, 0, 0.85)',
	GREY: 'rgba(0, 0, 0, 0.5)',
	LIGHT_GREY: 'rgba(0, 0, 0, 0.35)',
	DARK_GREY: 'rgba(0, 0, 0, 0.65)'
};
