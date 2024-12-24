import { useQuery } from '@tanstack/react-query'
import { getCurrentAnime } from '../shared/api/api'

export const useCurrentAnime = () => {
	return useQuery({
		queryKey: ['lastUpdated'],
		queryFn: getCurrentAnime,
		select: data => {
			return data
				.map((anime: any) => {
					if (
						!anime.attributes.coverImage ||
						!anime.attributes.coverImage.large
					) {
						return null
					}

					const title = anime.attributes.titles.en
					const description = anime.attributes.description
					const coverImage = anime.attributes.coverImage.large
					const averageRating = parseInt(anime.attributes.averageRating)
					const showType = anime.attributes.showType
					const episodeCount = anime.attributes.episodeCount
					const episodeLength = anime.attributes.episodeLength

					return {
						title,
						description,
						coverImage,
						averageRating,
						showType,
						episodeCount,
						episodeLength,
					}
				})
				.filter((anime: any) => anime !== null)
		},
	})
}
