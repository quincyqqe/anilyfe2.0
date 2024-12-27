import { Tabs, Tab } from '@nextui-org/react'

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import SideAnimeList from '../SideAnimeList/SideAnimeList'

export default function MainAnimeList() {
	return (
		<div className='flex w-full mt-6'>
			<div className='w-[70%] relative'>
				<div className='flex justify-between'>
					<Tabs aria-label='Categories' color='primary' variant='underlined'>
						<Tab key='newest' title={<span>NEWEST</span>} />
						<Tab key='popular' title={<span>POPULAR</span>} />
						<Tab key='top-rated' title={<span>TOP RATED</span>} />
					</Tabs>

					<div className='flex justify-center items-center mt-4'>
						<div className='flex items-center bg-[rgba(51,55,57,0.6)] rounded-md p-[6px] space-x-5'>
							<button className='text-white'>
								<FiChevronLeft size={20} />
							</button>
							<span className='text-white font-semibold'>1</span>
							<button className='text-white'>
								<FiChevronRight size={20} />
							</button>
						</div>
					</div>
				</div>
				<div className='grid grid-cols-5 gap-4 '>content</div>
			</div>

			<SideAnimeList />
		</div>
	)
}
