import ThemeSwitcher from './ThemeSwitcher'
import SearchInput from './SearchInput'
import { Link } from 'react-router-dom'
import { FaRandom } from 'react-icons/fa'
export default function Header() {
	return (
		<div className='fixed w-[100%] bg-[#0E0E0E] p-2 border-b-1 border-[--global-border] z-20'>
			<div className='flex items-center'>
				<h1 className='text-2xl font-bold'>
					<Link to='/'>AniLyfe</Link>
				</h1>

				<div className='flex items-center justify-center m-auto gap-5 min-w-[550px]'>
					<SearchInput />
					<Link to='/random'>
						<FaRandom className='text-white' />
					</Link>
					<ThemeSwitcher />
				</div>
			</div>
		</div>
	)
}
