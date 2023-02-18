import { FC, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

interface SelectorFieldProps {
	setCount: (count: string) => void
}

const SelectorField: FC<SelectorFieldProps> = ({ setCount }) => {
	const [open, setOpen] = useState(false)
	const [label, setLabel] = useState('all')

	const selectMenu = [
		{
			value: '',
			label: 'all',
		},
		{
			value: '1',
			label: '1',
		},
		{
			value: '2',
			label: '2',
		},
		{
			value: '3',
			label: '3',
		},
	]

	return (
		<div className='bg-zinc-900 rounded-xl w-40 p-2.5 m-auto mb-6'>
			<div
				className='w-full flex items-center justify-between px-2 py-1.5 bg-transparent rounded-xl border-orange-400 dark:border-pink-400 text-orange-400 dark:text-pink-400  border-2 select-none'
				onClick={() => setOpen(!open)}
			>
				{label}
				<BiChevronDown size={20} className={`${open && 'rotate-180'}`} />
			</div>
			{open && (
				<ul className='w-11/12 mt-2 m-auto  px-2 py-1.5 bg-transparent rounded-xl border-orange-400 dark:border-pink-400  border-2 '>
					{selectMenu?.map(i => (
						<li
							key={i.value}
							className='px-2 rounded-xl text-center text-sm hover:bg-zinc-800  '
							onClick={() => {
								setCount(i.value)
								setLabel(i.label)
								setOpen(false)
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
