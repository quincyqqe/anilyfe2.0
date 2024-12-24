import { HomeIcon, TrendingIcon, NewsIcon } from './icons'
import { Link, useLocation } from 'react-router-dom'


export default function Sidebar() {
	const location = useLocation()
	const navItems = [
		{ label: 'Головна', path: '/', Icon: HomeIcon },
		{ label: 'Тренди', path: '/trending', Icon: TrendingIcon },
		{ label: 'Новини', path: '/news', Icon: NewsIcon },
	]

	return (
		<div className='fixed w-[72px] h-[100%] bg-[#0E0E0E] pt-[3.5rem] max-sm:w-[100%] max-sm:h-[40px] max-sm:bottom-0 max-sm:pt-0 border-r-1 border-[--global-border]'>
			<div className='flex flex-col max-sm:flex-row items-center max-sm:w-full max-sm:justify-center'>
				{navItems.map(({ label, path, Icon }) => {
					const isActive = location.pathname === path

					return (
						<Link
							to={path}
							key={path}
							className={`text-sm mb-8 sm:mb-0 sm:p-4 flex w-[100%] flex-col items-center cursor-pointer transition-all duration-500 
								${
									isActive
										? 'border-[#DB1058] text-[#DB1058]'
										: 'border-transparent text-white'
								} 
								border-r-2 max-sm:border-t-2 max-sm:border-r-0 hover:border-[#DB1058] hover:text-[#DB1058]`}
						>
							<Icon />
							<span>{label}</span>
						</Link>
					)
				})}
			</div>
		</div>
	)
}
