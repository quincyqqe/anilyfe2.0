import axios from 'axios'

const KITSU_BASE_URL = 'https://kitsu.io/api/edge'
const JIKAN_BASE_URL = 'https://api.jikan.moe/v4'

export const getCurrentAnime = async () => {
	const response = await axios.get(
		`${KITSU_BASE_URL}/anime?filter[status]=current&page[limit]=20&page[offset]=0`
	)
	return response.data.data
}

export const getSeasonalAnime = async (year: number, season: string) => {
	const response = await axios.get(
		`${JIKAN_BASE_URL}/seasons/${year}/${season}?limit=20`
	)
	return response.data.data
}

export const getAnimeById = async (id: number) => {
	const response = await axios.get(`${JIKAN_BASE_URL}/anime/${id}`)
	return response.data.data
}

export const getAnimeByStatus = async (status: string) => {
	const response = await axios.get(
		`${JIKAN_BASE_URL}/top/anime?filter=${status}`
	)
	return response.data.data
}
