import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCurrentAnime } from '../../hooks/useCurrentAnime'
import { FiInfo, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { Skeleton } from '@nextui-org/skeleton'

export default function SpotlightSection() {
	const { data, isLoading, isError, isSuccess } = useCurrentAnime()
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
	const [show, setShow] = useState(false)

	useEffect(() => {
		if (isSuccess) {
			setShow(true)
		}
	}, [isSuccess])

	const scrollNext = () => emblaApi?.scrollNext()
	const scrollPrev = () => emblaApi?.scrollPrev()

	if (isLoading)
		return (
			<Skeleton className='rounded-lg bg-gradient-to-r from-[#080808] via-[#080808]/70 to-transparent'>
				<div className='w-full min-h-[300px] object-cover rounded-md lg:h-[320px] ' />
			</Skeleton>
		)

	if (isError) return <div>Error loading data...</div>

	return (
		<div
			className={`embla relative transition-all duration-700 ${
				show ? 'opacity-100' : 'opacity-0'
			}`}
			ref={emblaRef}
		>
			<div className='embla__container flex'>
				{data.map((anime, index) => (
					<div
						className='embla__slide relative w-full flex-shrink-0'
						key={index}
					>
						<img
							src={anime.coverImage}
							alt={anime.title}
							className='w-full min-h-[300px] object-cover rounded-md'
						/>
						<div className='absolute left-0 top-0 h-full w-[50%] bg-gradient-to-r from-[#080808] via-[#080808]/70 to-transparent'></div>
						<div className='absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#080808] to-transparent'></div>
						<div className='absolute inset-0 flex flex-col justify-end p-6 text-white space-y-4'>
							<div className='flex items-center space-x-4'>
								<span className='bg-gray-800 px-2 py-1 rounded text-sm uppercase'>
									{anime.showType}
								</span>
								<span className='bg-gray-800 px-2 py-1 rounded text-sm'>
									⭐ {anime.averageRating}
								</span>
								<span className='bg-gray-800 px-2 py-1 rounded text-sm'>
									📺 {anime.episodeCount} Episodes
								</span>
								<span className='bg-gray-800 px-2 py-1 rounded text-sm'>
									⏱ {anime.episodeLength} mins
								</span>
							</div>
							<h2 className='text-2xl lg:text-3xl font-bold max-w-2xl line-clamp-3'>
								{anime.title}
							</h2>
							<div className='flex flex-row max-lg:flex-col justify-between items-start lg:items-center w-full'>
								<p className='text-sm max-w-2xl line-clamp-3 max-sm:hidden text-[#c8c3bc]'>
									{anime.description}
								</p>
								<button
									className='px-6 py-2 font-bold text-lg transition-all duration-300 mt-4 lg:mt-0 lg:ml-4 rounded-xl flex items-center justify-center hover:scale-105 border-1 border-[rgba(51,55,57,0.4)] hover:border-[rgba(51,55,57,1)]'
									style={{
										backgroundColor: 'rgba(24, 26, 27, 0.4)',
										transformOrigin: 'center',
										willChange: 'transform',
									}}
								>
									<FiInfo className='mr-2' size={18} />
									<span className='transition-all duration-300'>Details</span>
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='absolute top-3 right-3 flex space-x-2 z-10'>
				<button
					onClick={scrollPrev}
					className='bg-[rgba(51,55,57,0.6)] rounded-md p-[6px]'
				>
					<FiChevronLeft size={24} />
				</button>
				<button
					onClick={scrollNext}
					className='bg-[rgba(51,55,57,0.6)] rounded-md p-[6px]'
				>
					<FiChevronRight size={24} />
				</button>
			</div>
		</div>
	)
}
