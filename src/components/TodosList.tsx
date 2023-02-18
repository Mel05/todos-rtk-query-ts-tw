import { FC } from 'react'

import { ITodo } from '../models/ITodo'
import TodoItem from './TodoItem'

interface TodosListProps {
	data: ITodo[]
	toggleCompleted: (item: ITodo) => void
	handleUpdate: (item: ITodo) => void
	handleDeleteProduct: (item: ITodo) => void
}

const TodosList: FC<TodosListProps> = ({
	data,
	toggleCompleted,
	handleUpdate,
	handleDeleteProduct,
}) => {
	return (
		<ul className='mx-auto max-w-fit pb-16'>
			{data?.map(item => (
				<TodoItem
					key={item.id}
					item={item}
					toggleCompleted={toggleCompleted}
					handleUpdate={handleUpdate}
					handleDeleteProduct={handleDeleteProduct}
				/>
			))}
		</ul>
	)
}

export default TodosList
