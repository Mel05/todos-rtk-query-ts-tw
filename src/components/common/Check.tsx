import { FC } from 'react'
import { BsCheck } from 'react-icons/bs'

interface CheckProps {
	isCompleted: boolean
}

const Check: FC<CheckProps> = ({ isCompleted }) => {
	return (
		<div
			className={`border-2 rounded-lg border-zinc-900 dark:border-pink-400  ${
				isCompleted ? 'bg-zinc-900 dark:bg-pink-400 ' : ''
			} w-6 h-6  mr-3 flex items-center justify-center `}
		>
			{isCompleted && (
				<BsCheck size={24} className='text-orange-400 dark:text-zinc-900' />
			)}
		</div>
	)
}

export default Check
