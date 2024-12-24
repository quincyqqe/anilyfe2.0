import { Input } from '@nextui-org/react'
import { MdSearch } from 'react-icons/md'

export default function SearchInput() {
	return (
		<Input
			className='w-[250px] max-sm:hidden'
			placeholder='Щось шукаєте?'
			size='md'
			startContent={<MdSearch size={24} />}
			type='search'
			radius='md'
		/>
	)
}
