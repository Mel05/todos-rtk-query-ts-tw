import { FC } from 'react'
import { useAppSelector } from '../hooks/redux'
import { selectSort } from '../redux/sortSlice'
import { useGetTodosQuery } from '../redux'

import TodoItem from './TodoItem'

interface TodosListProps {
	inputRef: React.RefObject<HTMLInputElement>
}

const TodosList: FC<TodosListProps> = ({ inputRef }) => {
	const { currentPage, limit, completed } = useAppSelector(selectSort)

	const { data: todos = [], isLoading } = useGetTodosQuery({
		limit,
		currentPage,
		completed,
	})

	if (isLoading)
		return (
			<>
				<h1 className='text-center text-2xl mt-20'> Loading... </h1>
			</>
		)

	return (
		<ul className='-todosList px-5 flex-auto mx-auto'>
			{todos?.map(todo => (
				<TodoItem key={todo.id} todo={todo} inputRef={inputRef} />
			))}
		</ul>
	)
}

export default TodosList
