import { useState } from 'react'
import { useSeasonalAnime } from '../hooks/useSeasonalAnime'
import { motion } from 'framer-motion'
import AnimeCard from '../components/AnimeCard/AnimeCard'

const seasons = ['Winter', 'Spring', 'Summer', 'Fall']

export default function TrendingPage() {
	const [currentSeason, setCurrentSeason] = useState<
		'Winter' | 'Spring' | 'Summer' | 'Fall'
	>('Fall')
	const currentYear = 2024
	const { data } = useSeasonalAnime(currentYear, currentSeason.toLowerCase())

	const handleSeasonChange = (
		season: 'Winter' | 'Spring' | 'Summer' | 'Fall'
	) => {
		setCurrentSeason(season)
	}

	return (
		<div>
			<div className='flex justify-center items-center lg:text-3xl md:text-xl sm:text:lg font-bold mx-2 pt-6'>
				{seasons.map((season, index) => (
					<div key={season} className='flex items-center'>
						<h1
							className={`cursor-pointer ${
								currentSeason === season ? 'text-[#e8e8e8]' : 'text-[#a69e92]'
							} transition duration-300`}
							onClick={() => handleSeasonChange(season as any)}
						>
							{season}
						</h1>
						{index < seasons.length - 1 && (
							<span className='text-[#d9d6d1] mx-4'>/</span>
						)}
					</div>
				))}
			</div>

			<motion.div
				className='mt-6 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-6'
				initial='hidden'
				animate='visible'
			>
				{data?.map((anime: any, index: any) => (
					<AnimeCard key={anime.mal_id} anime={anime} index={index} />
				))}
			</motion.div>
		</div>
	)
}
