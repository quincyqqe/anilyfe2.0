import { getAnimeByStatus } from '../shared/api/api'
import { useQuery } from '@tanstack/react-query'

export const useAnimeByStatus = (status: string) => {
	return useQuery({
		queryKey: [status],
		queryFn: () => getAnimeByStatus(status),
		// staleTime: 5 * 60 * 1000,
	})
}
