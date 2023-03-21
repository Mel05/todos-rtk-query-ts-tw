import { FC, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

import { useAppDispatch } from '../../hooks/redux'
import { setCompleted, setCurrentPage } from '../../redux/sortSlice'

const SelectorField: FC = () => {
	const dispatch = useAppDispatch()

	const [label, setLabel] = useState('all')
	const [isOpen, setIsOpen] = useState(false)

	const selectMenu = [
		{
			value: '',
			label: 'all',
		},
		{
			value: 'true',
			label: 'completed',
		},
		{
			value: 'false',
			label: 'НЕ_completed',
		},
	]

	const handleSelectChange = (value: string) => {
		dispatch(setCompleted(value))
		dispatch(setCurrentPage(1))
	}

	return (
		<div className='-selectorField grow relative w-1/3 min-w-[140px] rounded-xl mx-auto  my-2'>
			<div
				className='w-full flex items-center justify-between border-2 rounded-xl px-2 py-1.5  border-zinc-900 dark:border-pink-400   select-none bg-orange-400 dark:bg-zinc-900'
				onClick={() => setIsOpen(!isOpen)}
			>
				{label}
				<BiChevronDown size={20} className={`${isOpen && 'rotate-180'}`} />
			</div>
			{isOpen && (
				<ul className='absolute w-10/12 left-3.5 border-2 rounded-xl mt-2 px-2 py-1.5 bg-orange-400 border-zinc-900 dark:bg-zinc-900 dark:border-pink-400   '>
					{selectMenu?.map(i => (
						<li
							key={i.value}
							className=' rounded-xl text-center text-sm px-2 hover:bg-orange-300 dark:hover:bg-zinc-800'
							onClick={() => {
								handleSelectChange(i.value)
								setLabel(i.label)
								setIsOpen(false)
							}}
						>
							{i.label}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default SelectorField
