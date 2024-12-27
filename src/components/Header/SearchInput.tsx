import { Input } from '@nextui-org/react'
import { MdSearch } from 'react-icons/md'

export default function SearchInput() {
	return (
		<Input
			className='lg:w-[100%] max-md:w-[60%] max-sm:hidden'
			placeholder='Щось шукаєте?'
			size='md'
			startContent={<MdSearch size={24} />}
			type='search'
			radius='sm'
		/>
	)
}
