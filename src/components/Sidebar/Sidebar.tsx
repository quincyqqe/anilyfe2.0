import { HomeIcon, TrendingIcon} from './icons'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
	const location = useLocation()
	const navItems = [
		{ label: 'Головна', path: '/', Icon: HomeIcon },
		{ label: 'Тренди', path: '/trending', Icon: TrendingIcon },
	]

	return (
		<div className='fixed z-10 w-[72px] h-[100%] bg-[#0E0E0E] pt-[3.5rem] max-sm:w-[100%] max-sm:h-[60px] max-sm:bottom-0 max-sm:pt-0 border-r-1 border-[--global-border]'>
			<div className='flex flex-col max-sm:flex-row items-center max-sm:w-full max-sm:justify-center'>
				{navItems.map(({ label, path, Icon }) => {
					const isActive = location.pathname === path

					return (
						<Link
							to={path}
							key={path}
							className={`text-sm mb-8 sm:mb-0 sm:p-4 flex w-[100%] flex-col items-center cursor-pointer transition-all duration-500 
								${isActive ? 'border-primary text-primary' : 'border-transparent text-white'} 
								border-r-2 max-sm:border-t-2 max-sm:border-r-0 hover:border-primary hover:text-primary`}
						>
							<div className='flex flex-col items-center max-sm:mt-2'>
								<Icon />
								<span>{label}</span>
							</div>
						</Link>
					)
				})}
			</div>
		</div>
	)
}
