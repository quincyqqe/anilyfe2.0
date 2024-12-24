import ThemeSwitcher from './ThemeSwitcher'
import SearchInput from './SearchInput'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<div className='fixed w-[100%] bg-[#0E0E0E] p-2 border-b-1 border-[--global-border] z-10'>
			<div className='flex justify-between items-center'>
				<h1 className='text-2xl font-bold'>
					<Link to='/'>AniLyfe</Link>
				</h1>
				<div>
					<SearchInput />
				</div>
				<div>
					<ThemeSwitcher />
				</div>
			</div>
		</div>
	)
}
