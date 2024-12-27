import { getAnimeById } from '../shared/api/api'
import { useQuery } from '@tanstack/react-query'

export const useAnimeById = (id: number) => {
	return useQuery({
		queryKey: ['full', 'anime'],
		queryFn: () => getAnimeById(id),
	})
}
