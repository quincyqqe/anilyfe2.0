import { FiChevronDown } from 'react-icons/fi'
import { useAnimeByStatus } from '../../hooks/useAnimyByStatus'
import { useState } from 'react'

export default function SideAnimeList() {
	const { data: filteredData } = useAnimeByStatus('airing')

	const [expanded, setExpanded] = useState(false)

	function toggleExpand() {
		setExpanded(!expanded)
	}

	return (
		<div className='w-[30%] ml-4'>
			<div className='bg-[#0E0E0E] p-4 rounded'>
				<h2 className='text-lg font-bold mb-4'> Top Airing</h2>

				<div
					className='overflow-hidden transition-all duration-500'
					style={{
						maxHeight: expanded ? '660px' : '550px',
						overflowY: expanded ? 'scroll' : 'hidden',
					}}
				>
					{filteredData?.map((item: any) => (
						<div
							key={item.mal_id}
							className='flex items-center mb-4 bg-[#161616] hover:translate-x-2 transition-transform duration-300 w-[98%] rounded hover:text-primary cursor-pointer'
							style={{
								transformOrigin: 'center',
								willChange: 'transform',
							}}
						>
							<img
								src={item.images.jpg.image_url}
								alt={item.title}
								className='w-[4.25rem] h-[6rem] mr-4 object-cover rounded'
							/>
							<div className='flex flex-col'>
								<span className='text-sm font-semibold transition-colors duration-300 '>
									{item.title}
								</span>
								<span className='text-xs text-gray-400'>
									{item.title_english}
								</span>
							</div>
						</div>
					))}
				</div>
				<button
					className={`w-full mt-4 flex justify-center items-center bg-[#1a1a1a] text-white py-2 rounded ${
						expanded ? 'hidden' : 'block'
					}`}
					onClick={toggleExpand}
				>
					<FiChevronDown size={20} className='mr-2' />
				</button>
			</div>
		</div>
	)
}
