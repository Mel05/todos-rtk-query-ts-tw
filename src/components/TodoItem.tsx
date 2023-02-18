import { FC } from 'react'
import { BsTrash } from 'react-icons/bs'
import { CiEdit } from 'react-icons/ci'
import { ITodo } from '../models/ITodo'
import Check from './Check'

interface TodoItemProps {
	item: ITodo
	toggleCompleted: (item: ITodo) => void
	handleUpdate: (item: ITodo) => void
	handleDeleteProduct: (item: ITodo) => void
}

const TodoItem: FC<TodoItemProps> = ({
	item,
	toggleCompleted,
	handleUpdate,
	handleDeleteProduct,
}) => {
	return (
		<li>
			<span className=' flex items-center justify-between mb-3 rounded-2xl bg-zinc-800 p-3 border border-zinc-900 hover:border-orange-400 dark:hover:border-pink-400 '>
				<span
					className='flex items-center cursor-pointer w-full '
					onClick={() => toggleCompleted(item)}
				>
					<Check isCompleted={item.completed} />

					<span
						className={`select-none ${item.completed ? 'line-through' : ''}`}
					>
						{item.name}
					</span>
				</span>

				<span className='flex items-center ml-5'>
					<CiEdit
						size={22}
						className='mr-3 text-zinc-500 hover:text-orange-400 dark:hover:text-pink-400  transition-colors ease-in-out duration-300 cursor-pointer'
						onClick={() => handleUpdate(item)}
					/>

					<BsTrash
						size={22}
						className=' text-zinc-500 hover:text-red-600 transition-colors ease-in-out duration-300 cursor-pointer'
						onClick={() => handleDeleteProduct(item)}
					/>
				</span>
			</span>
		</li>
	)
}

export default TodoItem
