import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function AnimeCard({
	anime,
	index,
}: {
	anime: any
	index: number
}): JSX.Element {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: 'easeInOut' },
		},
	}

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
				<Link
					to={`/info/${anime.mal_id}`}
					className='absolute inset-0 bottom-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200'
				>
					<button>
						<FaPlay size={35} className='text-white' />
					</button>
				</Link>
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
