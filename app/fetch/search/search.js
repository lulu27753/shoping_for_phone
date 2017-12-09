import { get } from '../get.js'

export function getSearchData(page, cityName, category, keyword) {
	const kwdStr = keyword ? ('/' + keyword) : ''
	const result = get(`/api/search/${page}/${cityName}/${category}${kwdStr}`)
	console.log(`/api/search/${page}/${cityName}/${category}${kwdStr}`)
	return result
}