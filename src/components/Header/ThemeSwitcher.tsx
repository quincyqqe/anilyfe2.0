import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MdPalette } from 'react-icons/md'

export default function ThemeSwitcher() {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		const savedTheme = localStorage.getItem('theme') || 'blue'
		setTheme(savedTheme)
	}, [setTheme])

	const handleSetTheme = (newTheme: string) => {
		setTheme(newTheme)
		localStorage.setItem('theme', newTheme)
	}

	if (!mounted) return null

	return (
		<Dropdown placement='bottom-end'>
			<DropdownTrigger>
				<span>
					<MdPalette size={24} />
				</span>
			</DropdownTrigger>
			<DropdownMenu aria-label='Theme Actions' variant='flat'>
				<DropdownItem
					key='blue'
					variant='shadow'
					onPress={() => handleSetTheme('blue')}
					classNames={{
						base: `data-[hover=true]:bg-[#3B82F6] ${
							theme === 'blue' ? 'bg-[#3B82F6] text-white' : ''
						}`,
					}}
				>
					Blue
				</DropdownItem>
				<DropdownItem
					key='rose'
					variant='shadow'
					onPress={() => handleSetTheme('rose')}
					classNames={{
						base: `data-[hover=true]:bg-[#DB1058] ${
							theme === 'rose' ? 'bg-[#DB1058] text-white' : ''
						}`,
					}}
				>
					Rose
				</DropdownItem>
				<DropdownItem
					key='purple'
					variant='shadow'
					onPress={() => handleSetTheme('purple')}
					classNames={{
						base: `data-[hover=true]:bg-[#854BBF] ${
							theme === 'purple' ? 'bg-[#854BBF] text-white' : ''
						}`,
					}}
				>
					Purple
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}
