import { get } from '../get.js'
// import { post } from '../post.js'

export function getAdData () {
	const result = get('/api/homead');
	return result;
}

// export function getBookData () {
// 	const result = get('/v2/book/1220562');
// 	return result;
// }

export function getListData (city, page) {
	const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page);
	return result;
}