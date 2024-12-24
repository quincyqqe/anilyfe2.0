import { getSeasonalAnime } from '../shared/api/api'
import { useQuery } from '@tanstack/react-query'

export const useSeasonalAnime = (year: number, season: string) => {
	return useQuery({
		queryKey: [year, season],
		queryFn: () => getSeasonalAnime(year, season),
		staleTime: 5 * 60 * 1000,
        
	})
}
