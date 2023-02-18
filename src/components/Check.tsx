import { FC } from 'react'
import { BsCheck } from 'react-icons/bs'

interface CheckProps {
	isCompleted: boolean
}

const Check: FC<CheckProps> = ({ isCompleted }) => {
	return (
		<div
			className={`border-2 rounded-lg border-orange-400 dark:border-pink-400  ${
				isCompleted ? 'bg-orange-400 dark:bg-pink-400 ' : ''
			} w-6 h-6 mr-3 flex items-center justify-center `}
		>
			{isCompleted && <BsCheck size={24} className='text-zinc-900' />}
		</div>
	)
}

export default Check
