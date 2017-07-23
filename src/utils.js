import { parse, format } from 'date-fns';

export function formatDate(date) {
	return format(parse(date), 'MMM DD, YYYY');
}
