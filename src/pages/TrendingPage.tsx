import { useState } from 'react'
import { useSeasonalAnime } from '../hooks/useSeasonalAnime'
import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

const seasons = ['Winter', 'Spring', 'Summer', 'Fall']

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: 'easeInOut' },
	},
}

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

const AnimeCard = ({ anime, index }: { anime: any; index: number }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	return (
		<motion.div
			ref={ref}
			className='bg-[#0B0B0C] p-4 rounded-md shadow-md flex relative overflow-hidden'
			custom={index}
			variants={cardVariants}
			initial='hidden'
			animate={inView ? 'visible' : 'hidden'}
		>
			<div className='w-48 h-full relative group'>
				<img
					src={anime.images.jpg.large_image_url}
					alt={anime.title}
					className='w-full h-[280px] rounded-md transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:brightness-50'
				/>
				<a
					href={`https://myanimelist.net/anime/${anime.mal_id}`}
					target='_blank'
					rel='noopener noreferrer'
					className='absolute inset-0 bottom-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'
				>
					<button>
						<FaPlay size={30} />
					</button>
				</a>
			</div>
			<div className='ml-4 flex-1'>
				<h3 className='mt-4 text-xl font-bold text-white'>{anime.title}</h3>
				<p className='text-sm text-gray-400'>
					{anime.title_english || 'No English title available'}
				</p>
				<p className='mt-2 text-gray-300 line-clamp-3'>
					{anime.synopsis || 'No description available'}
				</p>
				<div className='mt-4 flex flex-wrap gap-2'>
					{anime.genres.map((genre: any) => (
						<span
							key={genre.mal_id}
							className='bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded-full'
						>
							{genre.name}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	)
}
